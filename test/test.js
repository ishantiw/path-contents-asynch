'use strict';
/**
* Path Contents Asynch Testing: A module to test all the relevant functionality and results of pathContentsAsynch module
* @author Ishan Tiwari <ishan210788@gmail.com>
*/
const expect = require('chai').expect;
const chai = require('chai');
const pathContentsAsynch = require('../index');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


describe('#Check all files and folders', function() {


  let pathContents = pathContentsAsynch('test/foo').then(function (result) {
    return result;
  });

    it('checking if there is any such dir', function() {

      expect(pathContents).to.eventually.not.equal(null);

    }),

    it('check if it has \'dir\' property', function() {

      expect(pathContents).to.eventually.have.property('dirs');

    }),

    it('check if it has \'files\' property', function() {

      expect(pathContents).to.eventually.have.property('files');

    }),

    it('checking the number of dirs', function() {

      expect(pathContents).to.eventually.have.property('dirs').with.lengthOf(2);

    }),

    it('checking the number of files', function() {

      expect(pathContents).to.eventually.have.property('files').with.lengthOf(3);

    });

  });
