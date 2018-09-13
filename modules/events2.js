var Person = require("./lib/Person");

var ben = new Person("Ted Tedson");
var george = new Person("Juan Perez");


george.on('write', function(write) {

	console.log(`${this.name} -> ${write}`);

});

ben.on('write', function(write) {

	console.log(`${this.name}: ${write}`);

});


ben.emit('write', "You may delay, but time will not.");
george.emit('write', "It is far better to be alone, than to be in bad company.");
