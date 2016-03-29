var parseArgv = require('minimist');
var args = parseArgv(process.argv);
var normal_args = args._;
var name = 'World';

if (normal_args.length > 2) {
	name = normal_args[2];
}

var greeting = 'Hello ' + name;

if (args.drunk) {
	greeting = greeting + ', you are my super star!';
}

console.log(greeting);