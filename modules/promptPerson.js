var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
	name: '',
	words: []
};


rl.question("What is the person name? ", function(answer) {

	person.name = answer;

	rl.setPrompt(`What would ${person.name} write? `);

	rl.prompt();

	rl.on('line', function(saying) {

		person.words.push(saying.trim());

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${person.name} write? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a person that write %j", person.name, person.words);
	process.exit();
	
});



