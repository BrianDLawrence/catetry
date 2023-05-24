/**
 * Retrieve Poem with poem id from database 
 */
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb'

const config = useRuntimeConfig()

interface Poem {
    _id: ObjectId;
    poem: string;
    name: string;
    breed: string;
    attributes: string;
    date: string;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const poemid = new String(query.poemid);
    var thepoem: Poem;

    if (!config.mongoURI)
        throw createError({
            statusCode: 400,
            statusMessage: "UNDEFINED RUNTIME CONFIGURATION - NO MONGO URI"
        })

    console.log(query.poemid)

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

        const poem = await poemsCollection.findOne<Poem>(
            { _id: new ObjectId(poemid.toString()) },
            {
                projection: { _id: 1, poem: 1, name: 1, breed: 1, attributes: 1, date: 1 },
            }
        )

        thepoem = poem!

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return thepoem;

});
