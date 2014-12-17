'use strict';
var assert, isObjectBrace;

assert = require('assert');

isObjectBrace = require('../index');

describe('IS-OBJECT-BRACE', function() {
  describe('#isObjectBrace()', function() {
    it('should return false, when passed {}', function() {
      assert.equal(true, isObjectBrace({}));
    });
    it('should return false, when passed {1:"a", 2:"b"}', function() {
      assert.equal(true, isObjectBrace({}));
    });
    it('should return false, when passed []', function() {
      assert.equal(false, isObjectBrace([]));
    });
    it('should return false, when passed ["string", 2, true, new Date()]', function() {
      assert.equal(false, isObjectBrace(["string", 2, true, new Date()]));
    });
    it('should return false, when passed null', function() {
      assert.equal(false, isObjectBrace(null));
    });
    it('should return false, when passed undefined', function() {
      assert.equal(false, isObjectBrace(void 0));
    });
    it('should return false, when passed Infinity', function() {
      assert.equal(false, isObjectBrace(Infinity));
    });
    it('should return false, when passed NaN', function() {
      assert.equal(false, isObjectBrace(NaN));
    });
    it('should return false, when passed string "Hello World!"', function() {
      assert.equal(false, isObjectBrace('Hello World!'));
    });
    it('should return false, when passed number 2', function() {
      assert.equal(false, isObjectBrace(2));
    });
    it('should return false, when passed new Function()', function() {
      assert.equal(false, isObjectBrace(new Function()));
    });
    it('should return false, when passed new Number()', function() {
      assert.equal(false, isObjectBrace(new Number()));
    });
    it('should return false, when passed new Date()', function() {
      assert.equal(false, isObjectBrace(new Date()));
    });
    it('should return false, when passed new Boolean()', function() {
      assert.equal(false, isObjectBrace(new Boolean()));
    });
    it('should return false, when passed new Error()', function() {
      assert.equal(false, isObjectBrace(new Error()));
    });
    it('should return false, when passed new EvalError()', function() {
      assert.equal(false, isObjectBrace(new EvalError()));
    });
    it('should return false, when passed new String()', function() {
      assert.equal(false, isObjectBrace(new String()));
    });
    it('should return false, when passed new RegExp("ab+c", "i")', function() {
      assert.equal(false, isObjectBrace(new RegExp("ab+c", "i")));
    });
    it('should return false, when passed new Array()', function() {
      assert.equal(false, isObjectBrace(new Array()));
    });
    it('should return false, when passed new Float32Array()', function() {
      assert.equal(false, isObjectBrace(new Float32Array()));
    });
    it('should return false, when passed new Float64Array()', function() {
      assert.equal(false, isObjectBrace(new Float64Array()));
    });
    it('should return false, when passed new Int16Array()', function() {
      assert.equal(false, isObjectBrace(new Int16Array()));
    });
    it('should return false, when passed new Int32Array()', function() {
      assert.equal(false, isObjectBrace(new Int32Array()));
    });
    it('should return false, when passed new Int8Array()', function() {
      assert.equal(false, isObjectBrace(new Int8Array()));
    });
    it('should return false, when passed new Uint16Array()', function() {
      assert.equal(false, isObjectBrace(new Uint16Array()));
    });
    it('should return false, when passed new Uint32Array()', function() {
      assert.equal(false, isObjectBrace(new Uint32Array()));
    });
    it('should return false, when passed new Uint8Array()', function() {
      assert.equal(false, isObjectBrace(new Uint8Array()));
    });
    it('should return false, when passed Math', function() {
      assert.equal(false, isObjectBrace(Math));
    });
  });
});
