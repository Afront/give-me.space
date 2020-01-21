exports.handler = (event, context, callback) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Test! (┛◉Д◉)┛彡',
			event: event,
		}),
	}
	/** Node style callback(error, response) */
	return callback(null, response)
}