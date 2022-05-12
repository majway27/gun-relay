const GUN = require('gun/gun');

const server = require('http').createServer().listen(8080);
const gun = GUN({web: server});