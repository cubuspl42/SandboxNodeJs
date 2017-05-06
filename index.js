let WebTorrent = require('webtorrent');

let client = new WebTorrent();
let buf = new Buffer('Hello, WebTorrent');
buf.name = 'Hello';

client.on('error', (error) => {
	console.log(`ERROR: ${error}`);
});

client.seed(buf, (torrent) => {
	console.log(`Seeding torrent ${torrent.magnetURI}`);

	torrent.on('warning', (warning) => {
		console.log(`WARNING: ${warning}`);
	});
});
