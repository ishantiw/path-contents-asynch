# Path content explorer

This module helps you to find all the directories and files under the given target path with their full paths asynchronously. To retrieve details synchronously please use [path-contents](https://www.npmjs.com/package/path-contents)

For any clarifications, please contact [Ishan](http://ishantiw.github.io)

[![Build Status](https://travis-ci.org/ishantiw/path-contents-asynch.svg?branch=master)](https://travis-ci.org/ishantiw/path-contents-asynch)

## Installation

  `npm install path-contents-asynch`

## Usage

```
  var pathContentAsynch = require('path-contents-asynch');
  var dir = './foo';
  var contents = pathContentAsynch(dir).then((result) => {
    //to display all the content
    console.log(result);
    //to display all the files
    console.log('Files '+ result.files);
    //to display all folder and subfolders
    console.log('Directories '+ result.dirs);
    });
```

## Tests

  `npm test`
