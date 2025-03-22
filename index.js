const { MongoClient } = require('mongodb');

async function main() {
    const url = "mongodb://localhost:27017"; // MongoDB connection URL
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB1");
        const collection = db.collection("users");

        // Insert a document
        await collection.insertOne({ name: "Bil", age: 22 });
        console.log("Document inserted!");

        // Query the document
        const result = await collection.findOne({ name: "Alice" });
        console.log("Query result:", result);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main();