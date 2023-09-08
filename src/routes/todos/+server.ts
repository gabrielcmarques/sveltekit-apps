import { addTodo, removeTodo } from '$lib/server/database'
import { json } from 'stream/consumers'
import type { RequestHandler } from './$types'

type Data = {
	success: boolean
	errors: Record<string, string>
}

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData()
	const todo = String(formData.get('todo'))

	const data: Data = {
		success: false,
		errors: {}
	}
	if (!todo) {
		data.errors.todo = 'required'
		return new Response(JSON.stringify(data), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		})
	}
	addTodo(todo)
	data.success = true

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	})
}

export const DELETE: RequestHandler = async ({ request }) => {
	const formData = await request.formData()
	const todoIdValue = formData.get('id')

	if (todoIdValue === null) {
		const errorReponse: Data = {
			success: false,
			errors: {
				id: 'required'
			}			
		}
		return new Response(JSON.stringify(errorReponse), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        })
	}

	const todoId = parseInt(todoIdValue as string, 10)

	removeTodo(todoId)

	// if (todoId !== null) {
	// 	const todoIdNumber = parseInt(todoId, 10)
	// 	removeTodo(todoIdNumber)
	// }

	return new Response(JSON.stringify({ success: true }), {
		headers: { 'Content-Type': 'application/json' },
		status: 200
	})
}
