/**
 * Utilize openAI to generate a poem based on the Cat
 */

import { Configuration, OpenAIApi } from 'openai'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    if (!config.openAIKey)
        throw createError({
            statusCode: 400,
            statusMessage: "UNDEFINED RUNTIME CONFIGURATION - NO open AI KEY"
        })

    const query = getQuery(event);

    const question = "Can you please create a poem that highlights the good attributes of a cat named " + query.name + "? Please include common attributes of " + query.breed + " cats and additionally the following unique attributes of " + query.name + ":" + query.attributes + "."
    console.log("To Chat GPT:" + question)

    const configuration = new Configuration({
        apiKey: config.openAIKey
    });

    const openai = new OpenAIApi(configuration);
    try {

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }]
        });

        console.log(completion.data.choices[0].toString)

        return completion.data.choices[0].message?.content

    } catch (error: any) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        throw createError({
            statusCode: 400,
            statusMessage: error.message,
        })
    }



});