//mdn date
var moment = require('moment');
//moment-library for date
//var date = new Date();
//var months = ['Jan', 'Feb']
//console.log(date.getMonth()); //0-11 month based

var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
//date.add(100, 'year').subtract(9, 'months');
console.log(date.format('h:mm a'))

//10:35 am
//6:01 am unpadded padded