exports.handler = async (event, context) => {
	const path = event.path.replace(/\/\.netlify\/functions\/[^\/]*\//, '');
	const path_parts = (path) ? path.split('/') : [];
	
	const generate_html = (unsafe_name = 'there') => {
		const safe_name = unsafe_name.replace(/&/, '&amp;')
									 .replace(/</, '&lt;')
									 .replace(/>/, '&gt;')
									 .replace(/"/, '&quot;')
									 .replace(/'/, '&#039;');

		return `
		<html lang="en">
			<head>
				<meta charset="utf-8">
			</head>
			<body>
				<h1>Hi ${safe_name}</h1>
			</body>
		</html>`
	}

	return {
		'statusCode': 200,
		'headers': {
			'Cache-Control': 'no-cache',
			'Content-Type': 'text/html',
		},
		'body': generate_html(path_parts[0])
	}
}