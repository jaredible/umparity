const assert = require('assert');
const umparity = require('../lib/index');

describe('Parity', function() {
	describe('#even()', function() {
		it('should return true when number is even', function() {
			assert.strictEqual(umparity.even(2), true);
		});
	});
	describe('#odd()', function() {
		it('should return true when number is odd', function() {
			assert.strictEqual(umparity.odd(1), true);
		});
	});
});