import parseArgv from 'minimist';
import {
	greet
}
from './index'

export function main() {
	var args = parseArgv(process.argv);
	var normal_args = args._;
	var name = 'World';

	if (normal_args.length > 2) {
		name = normal_args[2];
	}

	console.log(greet(name, args.drunk));
}