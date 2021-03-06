const assert = require('chai').assert,
      fs = require('fs'),
      ParkinglotManager = require('../src/service/ParkinglotManager.js');

var commands = [],
      mgr = new ParkinglotManager();

// testing scenarios for unit testing the methods in CommandHandler class
describe('Test for reading input test data', function () {
  it('reading input.txt', function (done) {
    fs.readFile('./data/input.txt', 'utf-8', function (err, data) {
      if (err) {
        throw 'Unable to read input test file';
      }
      commands = JSON.parse(JSON.stringify(data)).split('\n');
      done();
    });
  });

  it('checking commands', function (done) {
      assert.equal(commands[0].split(' ')[0], 'create_parking_lot');
      assert.equal(commands[1].split(' ')[0], 'park');
      assert.equal(commands[7].split(' ')[0], 'leave');
      assert.equal(commands[8], 'status');
      done();
  });
});

// unit tests for functions in ParkingLot class
describe('Testing Functions in ParkinglotManager class', function () {
  it('Creating a Parking lot', function (done) {
    var command = commands[0].split(' ').reverse();
    assert.equal(command.pop(), 'create_parking_lot');

    var totalParkings = mgr.createParkinglot(command);
    assert.equal(totalParkings, 6);
    done();
  });

  it('Allocating Parking to User 1', function (done) {
    var command = commands[1].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 1, 'these numbers are equal');
    done();
  });

  it('Allocating Parking to User 2', function (done) {
    var command = commands[2].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 2);
    done();
  });

  it('Allocating Parking to User 3', function (done) {
    var command = commands[3].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 3);
    done();
  });

  it('Allocating Parking to User 4', function (done) {
    var command = commands[4].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 4);
    done();
  });

  it('Allocating Parking to User 5', function (done) {
    var command = commands[5].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 5);
    done();
  });

  it('Allocating Parking to User 6', function (done) {
    var command = commands[6].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 6);
    done();
  });

  it('Leaving from slot 6', function (done) {
    var command = commands[7].split(' ').reverse();
    assert.equal(command.pop(), 'leave');
    var ele = mgr.leaveCar(command);
    assert.equal(ele.slot, 6);
    done();
  });

  it('Checking status', function (done) {
      var ele = mgr.getParkingStatus();
      assert.equal(ele.length, 6);
      done();
  });

  it('Allocating Parking to User 7. Should Reallocate the nearest empty postion 6', function (done) {
    var command = commands[9].split(' ').reverse();
    assert.equal(command.pop(), 'park');
    var ele = mgr.parkCar(command);
    assert.equal(ele, 6);
    assert.notEqual(ele, 7);
    done();
  });

  it('Allocating Parking to User 8. Should indicate Parking is full.', function (done) {
      try {
        var command = commands[10].split(' ').reverse();
        assert.equal(command.pop(), 'park');
        var ele = mgr.parkCar(command);
      }
      catch (err) {
        assert.notEqual(ele, -1);
      }
      done();
  });
});
