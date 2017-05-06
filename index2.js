let WebTorrent = require('webtorrent');

let torrentInfoHash = '4c26a4ea5d67e5c31a714a5c6324c8cda03dcdf2';

let client = new WebTorrent();

console.log(`Adding torrent ${torrentInfoHash}`)
client.add(torrentInfoHash, (torrent) => {
	console.log('Torrent ready');
	torrent.on('done', () => {
		console.log('Torrent done');
	});
});
