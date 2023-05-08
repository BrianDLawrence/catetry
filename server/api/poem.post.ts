/**
 * Utilize openAI to generate a poem based on the Cat
 */

import { Configuration, OpenAIApi } from 'openai'

import { MongoClient, ServerApiVersion } from 'mongodb'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    if (!config.mongoURI)
        throw createError({
            statusCode: 400,
            statusMessage: "UNDEFINED RUNTIME CONFIGURATION - NO MONGO URI"
        })

    const body = await readBody(event)
    console.log(body)
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(config.mongoURI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return "success!"

});