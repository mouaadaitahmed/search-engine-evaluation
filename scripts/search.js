import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = "search_engine_eval";
const COLLECTION = "documents";

async function search(query, limit = 5) {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    const results = await collection
      .find({ $text: { $search: query } })
      .project({ score: { $meta: "textScore" }, title: 1, content: 1, category: 1 })
      .sort({ score: { $meta: "textScore" } })
      .limit(limit)
      .toArray();

    return results;
  } finally {
    await client.close();
  }
}

const query = process.argv.slice(2).join(" ");
if (!query) {
  console.log("Usage : node scripts/search.js \"ma requête\"");
  process.exit(1);
}

search(query).then((results) => {
  console.log('\n=== Résultats pour : "' + query + '" ===');
  results.forEach((r, i) => {
    console.log('\n#' + (i + 1) + ' [' + r._id + '] (score: ' + r.score.toFixed(2) + ') - ' + r.title);
    console.log('   Catégorie: ' + (r.category || '?'));
    console.log('   ' + r.content.slice(0, 100) + '...');
  });
});
