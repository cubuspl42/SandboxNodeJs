let WebTorrent = require('webtorrent');

let client = new WebTorrent();

var buf = new Buffer('Some file content');
client.seed(buf, (torrent) => {
	console.log(torrent.infoHash);
});
