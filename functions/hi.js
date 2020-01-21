exports.handler = function(event, context) {
    return {
    	statusCode: 200,
    	body: JSON.stringify({
    		message: 'Somebody once told me',
    		event: event
    	})
    }
}