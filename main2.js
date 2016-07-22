'use strict';
const events = require('events');

// const eventEmitter = new events.EventEmitter();

const event = new events.EventEmitter(); 

event.on('some_event',function(){
	console.log('some_event 事件触发')
});

setTimeout(function(){
	event.emit('some_event');
},1000);

