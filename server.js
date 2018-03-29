const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});



//app.get('/', (req, res) => res.send('Hello World!'));