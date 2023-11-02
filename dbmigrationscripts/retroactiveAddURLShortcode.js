/**
 * This script retroactively adds a shortcode URL to the exist documents in the Poem Collection
 * This can also be used if there is a problem for some reason, it will add a new shortcode to all documents
 * in the collection with 0 starting at oldest document first 
 */
require('dotenv').config();
const shortcode = require('@speroautem/shortcode')
const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoURI = process.env.MONGOURI
const mongoDatabase = process.env.MONGODB

const client = new MongoClient(mongoURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        console.log("Connected to the database");

        const database = client.db(mongoDatabase);
        const poemsCollection = database.collection("Poems");

        // Get all documents sorted by date in ascending order
        const poems = await poemsCollection.find({}).sort({ $natural: 1 }).toArray();
        let n = 0;

        // Update each document with the new "shortcode" field
        for (const poem of poems) {
            const shortcodeValue = shortcode.encode(n);
            await poemsCollection.updateOne({ _id: poem._id }, { $set: { shortcode: shortcodeValue } });
            console.log(`Updated poem with _id: ${poem._id} with shortcode: ${shortcodeValue}`);
            n += 1;
        }
    } catch (err) {
        console.log("Error updating documents:", err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);





