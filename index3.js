var WebTorrent = require('webtorrent');

var client1 = new WebTorrent();
var client2 = new WebTorrent();

var buf = new Buffer('short novel about blah');

client1.seed(buf, { name: 'blah' }, function(torrent1) {
  console.log('Seeding torrent1');
  client2.add(torrent1.magnetURI, function(torrent2) {
    console.log('Torrent2 ready'); // Never gets here
  });      
});
