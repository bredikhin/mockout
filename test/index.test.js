'use strict';

/**
 * Dependencies
 */
var should = require('should');
var fork = require('child_process').fork;
var mockout;

describe('Mockout', function() {
  beforeEach(function(done) {
    mockout = fork('./index', [], {silent: true});

    done();
  });

  afterEach(function(done) {
    if (mockout.connected)
      mockout.send('shutdown');;

    done();
  });

  it('starts output upon connecting', function(done) {
    var message = {message: 'connect', some: 'thing'};
    mockout.send(message);

    mockout.stdout.on('readable', function(data) {
      var data = mockout.stdout.read().toString();;
      data.should.containEql(JSON.stringify(message));

      done();
    });
  });

  it('shuts down upon receiving a shutdown message', function(done) {
    mockout.send({message: 'shutdown'});

    mockout.stdout.on('end', function(data) {
      mockout.connected.should.not.be.True;

      done();
    });
  });
});
