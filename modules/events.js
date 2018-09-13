var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("Ted Tedson");

ben.on('write', function(write) {

	console.log(`${this.name}: ${write}`);

});


ben.emit('write', "You may delay, but time will not.");
