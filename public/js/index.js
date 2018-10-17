var socket = io(); //makingreq
socket.on('connect', function () {
console.log('Connected to server');

//create
socket.emit('createMessage', {
	from: 'mariben',
	text: 'Hellooooooo!'
});
});
socket.on('disconnect', function () {
console.log('Disconnected from Server');
});
//listen to event
socket.on('newMessage', function(message) {
console.log('newMessage', message);
});
