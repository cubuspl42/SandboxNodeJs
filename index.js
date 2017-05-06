let WebTorrent = require('webtorrent');

let client = new WebTorrent();

let buf = new Buffer('Hello, WebTorrent');
buf.name = 'Hello';

client.seed(buf, (torrent) => {
	console.log(torrent.infoHash);
});
