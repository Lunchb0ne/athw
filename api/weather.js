const https = require('https');
const initial = 'https://api.forecast.io/forecast/' + process.env.DARKSKY + '/';

module.exports = async (req, result) => {
	result.setHeader('Access-Control-Allow-Credentials', true);
	result.setHeader('Access-Control-Allow-Origin', '*');
	// another common pattern
	// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	result.setHeader(
		'Access-Control-Allow-Methods',
		'GET,OPTIONS,PATCH,DELETE,POST,PUT'
	);
	result.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	);
	const { latitude = 1, longitude = 1 } = req.query;
	// console.log(req.query);
	const assembler = initial + latitude + ',' + longitude + '?' + 'units=si';
	// console.log(assembler);
	https
		.get(assembler, function (res) {
			var body = '';

			res.on('data', function (chunk) {
				body += chunk;
			});

			res.on('end', function () {
				result.status(200).send(body);
			});
		})
		.on('error', function (e) {
			result.status(403).send('Got an error: ', e);
		});
};
