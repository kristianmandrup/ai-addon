/*
 * ai-addon
 * https://github.com/kristianmandrup/ai-addon
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var ai-addon = require('../lib/ai-addon.js');

describe('ai-addon module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-addon.awesome('livia')).to.equal('hello livia');
        });
    });
});
