/**
 * Save generatered poem to db
 */
import client from './mongoConnection'
import * as shortcode from '@speroautem/shortcode'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    var sharableurl

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("CatetryDB");
        const poemsCollection = database.collection("Poems");

        //check how many documents exist to create short code for access later
        //IN THEORY -> there could be a possibility that if two people generated poems at the exact same time in separate instances
        //a duplicate short code could be created, however that is unlikely with the current usage. 
        //If catetry becomes that popular, there will be other parts of the codebase that will need to be optimized so not worrying 
        //about it at the moment. 
        const count: number = await poemsCollection.countDocuments({});
        const theshortcode = shortcode.encode(count);

        // create a document to insert
        const poem = {
            poem: body.poem,
            name: body.name,
            breed: body.breed,
            attributes: body.attributes,
            date: body.date,
            shortcode: theshortcode  //note that current size works just 
        }
        const result = await poemsCollection.insertOne(poem);
        console.log(`A poem was inserted to the CatetryDB with the _id: ${result.insertedId}`)
        sharableurl = config.BASE_URL + "/p" + theshortcode

    } catch (error: any) {
        throw createError({
            statusCode: 400,
            statusMessage: error.message,
        })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return { sharableurl }

});