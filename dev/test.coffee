# name: index.js
#
# author: 沈维忠 ( Shen Weizhong / Tony Stark )
#
# Last Update: 沈维忠 ( Shen Weizhong / Tony Stark )



'use strict'



assert        = require 'assert'

isObjectBrace = require '../index'



describe 'IS-OBJECT-BRACE', ->

	describe '#isObjectBrace()', ->

		it 'should return false, when passed {}', ->

			assert.equal true, isObjectBrace {}

			return

		it 'should return false, when passed {1:"a", 2:"b"}', ->

			assert.equal true, isObjectBrace {}

			return

		it 'should return false, when passed []', ->

			assert.equal false, isObjectBrace []

			return

		it 'should return false, when passed ["string", 2, true, new Date()]', ->

			assert.equal false, isObjectBrace ["string", 2, true, new Date()]

			return

		it 'should return false, when passed null', ->

			assert.equal false, isObjectBrace null

			return

		it 'should return false, when passed undefined', ->

			assert.equal false, isObjectBrace undefined

			return

		it 'should return false, when passed Infinity', ->

			assert.equal false, isObjectBrace Infinity

			return

		it 'should return false, when passed NaN', ->

			assert.equal false, isObjectBrace NaN

			return

		it 'should return false, when passed string "Hello World!"', ->

			assert.equal false, isObjectBrace 'Hello World!'

			return

		it 'should return false, when passed number 2', ->

			assert.equal false, isObjectBrace 2

			return

		it 'should return false, when passed new Function()', ->

			assert.equal false, isObjectBrace new Function()

			return

		it 'should return false, when passed new Number()', ->

			assert.equal false, isObjectBrace new Number()

			return

		it 'should return false, when passed new Date()', ->

			assert.equal false, isObjectBrace new Date()

			return

		it 'should return false, when passed new Boolean()', ->

			assert.equal false, isObjectBrace new Boolean()

			return

		it 'should return false, when passed new Error()', ->

			assert.equal false, isObjectBrace new Error()

			return

		it 'should return false, when passed new EvalError()', ->

			assert.equal false, isObjectBrace new EvalError()

			return

		it 'should return false, when passed new String()', ->

			assert.equal false, isObjectBrace new String()

			return

		it 'should return false, when passed new RegExp("ab+c", "i")', ->

			assert.equal false, isObjectBrace new RegExp("ab+c", "i")

			return

		it 'should return false, when passed new Array()', ->

			assert.equal false, isObjectBrace new Array()

			return

		it 'should return false, when passed new Float32Array()', ->

			assert.equal false, isObjectBrace new Float32Array()

			return

		it 'should return false, when passed new Float64Array()', ->

			assert.equal false, isObjectBrace new Float64Array()

			return

		it 'should return false, when passed new Int16Array()', ->

			assert.equal false, isObjectBrace new Int16Array()

			return

		it 'should return false, when passed new Int32Array()', ->

			assert.equal false, isObjectBrace new Int32Array()

			return

		it 'should return false, when passed new Int8Array()', ->

			assert.equal false, isObjectBrace new Int8Array()

			return

		it 'should return false, when passed new Uint16Array()', ->

			assert.equal false, isObjectBrace new Uint16Array()

			return

		it 'should return false, when passed new Uint32Array()', ->

			assert.equal false, isObjectBrace new Uint32Array()

			return

		it 'should return false, when passed new Uint8Array()', ->

			assert.equal false, isObjectBrace new Uint8Array()

			return

		it 'should return false, when passed Math', ->

			assert.equal false, isObjectBrace Math

			return

		return

	return
