'use strict';

var expect = require('chai').expect;
var chai = require('chai');
var pathContentsAsynch = require('../index');
var mock = require('mock-fs');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


describe('#Check all files and folders', function() {

/* Can also be done using mocks */

  mock({
    'path/to/fake/dir': {
      'some-file.txt': 'This is a testing file',
      'foo': {/* empty directory*/}
    },
    'path/to/test.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
    'some/other/path': {/* another empty directory */}
  });

    it('checking if there is any such dir', function() {

      pathContentsAsynch('test/foo').then((results)=> {
        console.log(results);
        expect(results).to.not.equal(null);
      });
      mock.restore();
    }),

    it('check if it has \'dir\' property', function() {

      return expect(pathContentsAsynch('test/foo')).to.eventually.have.property('dirs');

    }),

    it('check if it has \'files\' property', function() {

      return expect(pathContentsAsynch('test/foo')).to.eventually.have.property('files');

    }),

    it('check the number of dirs', function() {

      return expect(pathContentsAsynch('test/foo').then((result)=> {
        return result.dirs.length;
      })).to.be.fulfilled.and.eventually.equal(6);

    })

  });
