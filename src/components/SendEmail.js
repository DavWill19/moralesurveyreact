fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "00b6ef0f49mshb1544582cef9e7dp1569edjsna2f14e69fd58",
		"x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com"
	},
	"body": {
		"personalizations": [
			{
				"to": [
					{
						"email": "john@example.com"
					}
				],
				"subject": "Hello, World!"
			}
		],
		"from": {
			"email": "from_address@example.com"
		},
		"content": [
			{
				"type": "text/plain",
				"value": "Hello, World!"
			}
		]
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});