# Path content explorer

This module helps you to find all the directories and files under the given target path with their full paths

For any clarifications please contact [Ishan](http://ishantiw.github.io)

[![Build Status](https://travis-ci.org/ishantiw/path-contents.svg?branch=master)](https://travis-ci.org/ishantiw/path-contents)

## Installation

  `npm install path-contents`

## Usage

```
  var pathContent = require('path-contents');

  var contents = pathContent.getAllContents("views");

  console.log(contents);
  //to display all the files
  console.log('Files '+ contents.files);
  //to display all folder and subfolders
  console.log('Directories '+ contents.dirs);

```

## Tests

  `npm test`
