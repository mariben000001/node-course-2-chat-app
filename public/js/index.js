var socket = io(); //makingreq
socket.on('connect', function () {
console.log('Connected to server');

});
socket.on('disconnect', function () {
console.log('Disconnected from Server');
});
//listen to event
socket.on('newMessage', function(message) {
console.log('newMessage', message);
var li = jQuery('<li></li>');
li.text(`${message.from}: ${message.text}`);

jQuery('#messages').append(li);
});
/*
socket.emit('createMessage', {
from: 'Frank',
text: 'Hi'
}, function (data) {
	console.log('Got it', data);
});*/

jQuery('#message-form').on('submit', function (e) {
	e.preventDefault(); //prevent to go to URL the typed
	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
}, function () {
});
});
