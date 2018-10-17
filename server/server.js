const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

	io.on('connection', (socket) => {
	console.log('New user connected');
	
	//makeevent 
	socket.emit('newMessage', {
	from: 'Angeline!!!',
	text: 'Meet me at 6pm @ 7-11',
	createdAt: 123
	});
	
	//listen
	socket.on('createMessage', (message) => {
	console.log('createMessage', message);
	});
	
	socket.on('disconnect', () => {
	console.log('User disconnected');
	});

}); //registereventlistener



server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});