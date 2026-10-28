import { MongoClient } from "mongodb";
import { corpus } from "../data/corpus.js";

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = "search_engine_eval";
const COLLECTION = "documents";

async function main() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    console.log("Connecté à MongoDB :", URI);

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    await collection.deleteMany({});
    await collection.insertMany(corpus);
    console.log('Corpus importé : ' + corpus.length + ' documents');

    await collection.createIndex({
      title: "text",
      content: "text",
      keywords: "text",
    });
    console.log("Index textuel créé");

    const count = await collection.countDocuments();
    console.log("Total documents en base :", count);
  } catch (err) {
    console.error("Erreur import :", err.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main();
