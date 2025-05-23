import type { AppSyncIdentityCognito } from 'aws-lambda'
import { connectToMongodb } from '@/shared/mdbUtils'

import type { Schema } from '@/data/resource'

// type TodoList = Schema["listTodo"]['functionHandler'];

function successResponse(body: unknown): object {
    return {
        statusCode: 200,
        todoList: body,
    }
}
function errorResponse(err: Error): object {
    const errorMessage = err.message
    return {
        statusCode: 400,
        body: errorMessage,
    }
}
export const handler: Schema['listTodo']['functionHandler'] = async (
    event,
    context
) => {
    console.log('got event: ' + JSON.stringify(event))
    console.log('got context: ' + JSON.stringify(context))
    // Connect to MongoDB
    const [client, , collection] = await connectToMongodb()

    try {
        console.log('Connected to MongoDB')
        let user = null
        if ((event.identity as AppSyncIdentityCognito).username)
            user = (event.identity as AppSyncIdentityCognito).username

        const payload = { username: user }
        console.log('retrieving results')
        const response = await collection.find(payload).toArray()
        console.log(`results retrieved: ${JSON.stringify(response)}`)

        return successResponse(response)
        // return response.body;
    } catch (e) {
        console.log('got error: ' + e)
        return errorResponse(e as Error)
    } finally {
        if (client) {
            await client.close()
        }
    }
}
