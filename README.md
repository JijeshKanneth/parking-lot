# Parking Lot Problem

## About Problem

To **design a parking lot system** with ability to:

- Assign car's to nearest available parking slot.
- Show charges based on the parking hour.
- Unassign the parking slot while the car is leaving and make it available
- Check status of parking slots.

## Pre requisites

The source code for this project is written using [Node.js](https://nodejs.org/). Make sure you have [Node.js](https://nodejs.org/) installed on your computer before running this application, **if not please install Node.js from [here](https://nodejs.org/en/download/)**.

To check if you have Node.js and NPM installed by running simple commands to see what version of each is installed:

 - **Test Node.js**: To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this `v11.8.0`.

 - **Test NPM**. To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this `7.7.4`.

> **Note:** [Node installer](https://nodejs.org/en/download/) installs both Node.js and npm on your system.

## How to run?

This is a console application written in `Node.js`. This can be run by passing command file:

It accepts a filename as a parameter at the terminal and read the commands from that file.

### Quick Start

**Proceed to the steps below only if you've `Node.js` installed.** If not, please refer [pre requisites](#pre-requisites) section.

#### Run commands from file

Open terminal and type `node src/index.js ./data/input.txt`.

```terminal
node src/index.js <path_to_file.txt>
```

**Note**: You can find a few sample input files inside `data/` folder.

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < REGISTRATION NUMBER > < COLOR >**: `park KA-01-HH-1234 White` will allocate the nearest slot from entry gate.

- **leave < REGISTRATION NUMBER > < PARKING_HOURS >**: `leave KA-01-HH-1234 4` will make slot number 4 free.

- **status**: `status` will display cars and their slot details

```bash
Slot No.  Registration
1         KA-01-HH-1234
2         KA-01-HH-9999
3         KA-01-BB-0001
5         KA-01-HH-2701
6         KA-01-HH-3141
```

> **NOTE: Any commands which are not mentioned above will throw an error: `Invalid command`**

**To view all the commands in terminal, please run `npm run help`**

## Modules - OOPS Approach

There are four classes defined:

`CommandHandler`: The command handler class is the main endpoint for the services return in the ParkinglotManager class. The processCommand method transfers the valid command along with params to ParkinglotManager class to process.

`ParkinglotManager`: The class extends the functionalities of SlotManager and overrides the features to fit the parkinglot solution.

`SlotManager`: The class contains methods to create and manage the slots 

`Car`: Car is the domain object that carries the identity and state of the car for parking.

## Test Scripts

Tests are written using [Mocha](https://mochajs.org/) and can be run using `npm test`

#### Unit tests

Unit tests are written for the methods of `ParkinglotManager` class.

