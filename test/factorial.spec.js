var testFactorial =  require('../src/factorial.js');
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Test factorial', function () {
    it('should return the right solution for -5!', function() {
        var result = testFactorial.factorial(-5);
        result.should.equal(-1);
    });
    
    it('should return the right solution for 0!', function() {
        var result = testFactorial.factorial(0);
        result.should.equal(0);
    });

    it('should return the right solution for 1!', function() {
        var result = testFactorial.factorial(1);
        result.should.equal(1);
    });
    
    it('should return the right solution for 2!', function() {
        var result = testFactorial.factorial(2);
        result.should.equal(2);
    });

    it('should return the right solution for 4!', function() {
        var result = testFactorial.factorial(4);
        result.should.equal(24);
    });

    it('should return the right solution for 5!', function() {
        var result = testFactorial.factorial(5);
        result.should.equal(120);
    });
});
