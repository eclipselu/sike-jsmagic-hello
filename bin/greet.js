#!/usr/bin/env node
var parseArgv = require('minimist');
var greet = require('../index');
var args = parseArgv(process.argv);
var normal_args = args._;
var name = 'World';

if (normal_args.length > 2) {
	name = normal_args[2];
}

console.log(greet.greet(name, args.drunk));