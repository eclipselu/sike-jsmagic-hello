'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.main = main;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _index = require('./index');

function main() {
	var args = (0, _minimist2['default'])(process.argv);
	var normal_args = args._;
	var name = 'World';

	if (normal_args.length > 2) {
		name = normal_args[2];
	}

	console.log((0, _index.greet)(name, args.drunk));
}