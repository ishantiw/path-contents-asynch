'use strict';
/**
* Path Contents Asynch: A module which takes target path as an argument and returns contents in the form of filesnames and directories
* @author Ishan Tiwari <ishan210788@gmail.com>
*/
const path = require('path');
const fs = require('fs');

let pathContent = [];
let dirNames = [];
let fileNames = [];

/**
   * A function that takes target path as an argument and returns a list of all the content in the given path
   * @param {string}      directory      A string which represents the target path
   * @returns  {promise}    promise  A promise object which resolves all the contents in the given directory
*/
function readDirectory(directory) {
    return new Promise(function(resolve, reject) {
        fs.readdir(directory, function(err, pathContentList) {
            if (err) {
                reject(err);
            } else {
                resolve(pathContentList);
            }
        });
    });
}

/**
   * A function that takes fs file object as an argument and returns fs stat object
   * @param {Object}      file      A file object
   * @returns  {promise}    promise  A promise object which resolves stats object of fs module of a given item of a directory
*/
function readFile(file) {
    return new Promise(function(resolve, reject) {
        fs.stat(file, function(err, stat) {
            if (err) {
                reject(err);
            } else {
                resolve(stat);
            }
        });
    });
}
/**
   * A function that takes target path as an argument and returns contents in the form of filesnames and directories
   * @param  {string}      directory      A string which represents the target path
   * @returns  {promise}    promise  A promise object which returns pathContent object which contains list of files and folders
*/
module.exports = function traverser(directory) {
    return readDirectory(directory).then((pathContentList)=> {
        return Promise.all(pathContentList.map((file)=> {
            file = path.resolve(directory, file);
            return readFile(file).then((stat)=> {
                if (stat.isDirectory()) {
                    dirNames.push(path.join(directory, file));
                    return traverser(file);
                } else {
                    fileNames.push(path.join(directory, file));
                    return file;
                }
            });
        }));
    }).then(() => {
        pathContent.push({
          'dirs': dirNames,
          'files': fileNames
        });
        return pathContent[0];
    });
}
