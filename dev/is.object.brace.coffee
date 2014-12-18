# name: index.js
#
# author: 沈维忠 ( Shen Weizhong / Tony Stark )
#
# Last Update: 沈维忠 ( Shen Weizhong / Tony Stark )



'use strict'



isFn = require 'amp-is-function'



fn = ->

	rslt = if Object::toString.call(arguments[0]) is '[object Object]' then true else false



umd = ->

	_this = arguments[0]

	if isFn _this

		if typeof define is 'function' and define.amd

			define (->

				(@isObject = _this)

			)

		else if typeof exports is 'object'

			module.exports = _this

		else

			@isObject = _this

	return



umd fn
