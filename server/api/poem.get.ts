/**
 * Retrieve Poem with poem id from database 
 */
import { ObjectId } from 'mongodb'
import client from './mongoConnection'

const config = useRuntimeConfig()

interface Poem {
    _id: ObjectId;
    poem: string;
    name: string;
    breed: string;
    attributes: string;
    date: string;
    sharableurl: string;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const poemid = new String(query.poemid);
    var thepoem: Poem;

    console.log(query.poemid)
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
        thepoem.sharableurl = config.BASE_URL + "/p" + thepoem._id

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return thepoem;

});
