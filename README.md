# Mocking a series of objects being sent through stdout

[![Build Status](https://travis-ci.org/bredikhin/mockout.png?branch=master)](https://travis-ci.org/bredikhin/mockout)
[![NPM version](https://badge.fury.io/js/mockout.png)](http://badge.fury.io/js/mockout)

## Installation

`sudo npm install --save mockout`

[![NPM](https://nodei.co/npm/mockout.png)](https://nodei.co/npm/mockout/)

## Usage

```javascript
// Fork a child process
var mockout = fork(require.resolve('mockout'), [], {silent: true});

// Start sending messages
mockout.send({event: 'connect', some: 'thing'});

// Check up on mockout.stdout
// ...

// Stop the messages
mockout.send({event: 'shutdown'});
```

## Contributions

* are welcome;
* should be tested;
* should follow the same coding style.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 [Ruslan Bredikhin](http://www.ruslanbredikhin.com/)
