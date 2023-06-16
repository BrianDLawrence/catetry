/**
 * Retrieve Poems from database - default is 5 of the latest poems
 * FUTURE - have option to search by Cat name
 */
import { MongoClient, ServerApiVersion } from 'mongodb'

const config = useRuntimeConfig()

interface Poem {
    poem: string;
    name: string;
    breed: string;
    attributes: string;
    date: Date;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    var poem_array: Poem[];

    const poemLimit = new Number(query.poemCount);

    if (!config.mongoURI)
        throw createError({
            statusCode: 400,
            statusMessage: "UNDEFINED RUNTIME CONFIGURATION - NO MONGO URI"
        })

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

        const database = client.db("CatetryDB");
        const poemsCollection = database.collection<Poem>("Poems");

        const filter = {};
        const poems = poemsCollection.find<Poem>(
            filter,
            {
                sort: { $natural: -1 }, //return latest first by date
                projection: { _id: 1, poem: 1, name: 1, breed: 1, attributes: 1, date: 1 },
            }
        ).limit(poemLimit.valueOf());

        if ((await poemsCollection.countDocuments(filter)) === 0) {
            console.warn("No documents found!");
            return "NO DOCUMENTS"
        }

        poem_array = await poems.toArray();

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return poem_array;

});