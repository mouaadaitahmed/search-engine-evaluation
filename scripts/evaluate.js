import { MongoClient } from "mongodb";
import { queries } from "../data/queries.js";
import { qrels } from "../data/qrels.js";

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = "search_engine_eval";
const COLLECTION = "documents";

function computeMetrics(retrievedIds, relevantIds) {
  const retrievedSet = new Set(retrievedIds);
  const relevantSet = new Set(relevantIds);

  const pertinentRetournes = [...retrievedSet].filter((id) => relevantSet.has(id)).length;

  const totalRetournes = retrievedIds.length;
  const totalPertinents = relevantIds.length;

  const precision = totalRetournes === 0 ? 0 : pertinentRetournes / totalRetournes;
  const rappel = totalPertinents === 0 ? 0 : pertinentRetournes / totalPertinents;
  const fMesure = precision + rappel === 0 ? 0 : (2 * precision * rappel) / (precision + rappel);

  return { precision, rappel, fMesure, pertinentRetournes, totalRetournes, totalPertinents };
}

async function run() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    console.log("Evaluation\n");

    let sumP = 0, sumR = 0, sumF = 0;
    const tableRows = [];

    for (const q of queries) {
      const results = await collection
        .find({ $text: { $search: q.text } })
        .project({ score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } })
        .limit(5)
        .toArray();

      const retrievedIds = results.map((r) => r._id);
      const relevantIds = qrels[q.qid] || [];
      const m = computeMetrics(retrievedIds, relevantIds);

      sumP += m.precision;
      sumR += m.rappel;
      sumF += m.fMesure;

      tableRows.push({
        qid: q.qid,
        query: q.text,
        retrieved: retrievedIds.join(", ") || "(aucun)",
        relevant: relevantIds.join(", ") || "(aucun)",
        ...m,
      });
    }

    for (const r of tableRows) {
      console.log(r.qid + ' - ' + r.query);
      console.log('  retournes : ' + r.retrieved);
      console.log('  qrels     : ' + r.relevant);
      console.log('  precision=' + r.precision.toFixed(2) + '  rappel=' + r.rappel.toFixed(2) + '  f-mesure=' + r.fMesure.toFixed(2) + '\n');
    }

    const n = queries.length;
    console.log("Moyennes");
    console.log("precision:", (sumP / n).toFixed(3));
    console.log("rappel:", (sumR / n).toFixed(3));
    console.log("f-mesure:", (sumF / n).toFixed(3));
  } catch (err) {
    console.error("Erreur évaluation :", err.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
