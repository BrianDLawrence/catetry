/**
 * Save generatered poem to db
 */
import client from './mongoConnection'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    var sharableurl

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("CatetryDB");
        const poemsCollection = database.collection("Poems");
        // create a document to insert
        const poem = {
            poem: body.poem,
            name: body.name,
            breed: body.breed,
            attributes: body.attributes,
            date: body.date
        }
        const result = await poemsCollection.insertOne(poem);
        console.log(`A poem was inserted to the CatetryDB with the _id: ${result.insertedId}`)
        sharableurl = config.BASE_URL + "/p" + result.insertedId

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return { sharableurl }

});