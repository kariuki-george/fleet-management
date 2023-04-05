"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_stringify_1 = require("csv-stringify");
const _1 = require(".");
const state = { driverState: {}, tomorrowDate: new Date() };
const trips = [];
// Will generate an event
const genDriverEvent = (driverId) => {
    const { eventTime, routeId, carId } = state.driverState[driverId];
    // Check if the driver will go another trip or will they rest
    // Rest times range from 6 hours to 9 hours
    // Work starts at 5. So stopping time will range from 8 to 11pm
    const hour = new Date(eventTime).getHours();
    const timeRandom = [
        6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ];
    const randomRestTime = timeRandom[Math.floor(Math.random() * timeRandom.length)];
    // THe can falls under 24 hours system and the trip can roll to the next day
    if (hour > 24 + 6 - randomRestTime || eventTime >= state.tomorrowDate) {
        // Rest
        delete state.driverState[driverId];
        return;
    }
    // continue working
    // Generate a random route that is different from the previous one
    let randomRoute = _1.routes[Math.floor(Math.random() * _1.routes.length)].routeId;
    while (randomRoute === routeId) {
        randomRoute = _1.routes[Math.floor(Math.random() * _1.routes.length)].routeId;
    }
    // Generate a random time taken for the trip
    const timeTaken = Number((Math.floor(Math.random() * (120 - 30 + 1) + 30) / 60).toPrecision(2));
    state.driverState[driverId] = {
        carId,
        driverId,
        routeId: randomRoute,
        timeTaken,
        eventTime: new Date(new Date(eventTime).getTime() + timeTaken * 60 * 60 * 1000),
    };
    trips.push({
        driverId,
        routeId: randomRoute,
        timeTaken,
        eventTime: new Date(new Date(eventTime).getTime() + timeTaken * 60 * 60 * 1000),
        carId,
    });
    return;
};
// Will generate events for a day
const generateDayEvents = (date) => {
    // Start the day with preparing the state.driverState
    for (let index = 0; index < _1.cars.length; index++) {
        state.driverState[_1.cars[index].driverId] = {
            driverId: _1.cars[index].driverId,
            eventTime: date,
            routeId: "",
            timeTaken: 0,
            carId: _1.cars[index].carId,
        };
    }
    // Run until the drivers have to rest
    while (Object.keys(state.driverState).length > 0) {
        const workingDrivers = Object.keys(state.driverState);
        for (const driver in workingDrivers) {
            genDriverEvent(workingDrivers[driver]);
        }
    }
};
// Generate events for each driver for a specified amount of time
const genPeriodEvents = () => {
    let startDate = new Date("2020-04-15T06:00:00.000Z");
    let numOfDays = 7;
    for (let counter = 0; counter < numOfDays; counter++) {
        // Build the date
        const calcDate = new Date(startDate.getTime() + 1000 * 60 * 60 * 24 * numOfDays);
        // remove the 6am  mark
        const tomorrowDate = new Date(startDate.getTime() +
            1000 * 60 * 60 * 24 * (numOfDays + 1) -
            6 * 60 * 1000 * 60);
        state.tomorrowDate = tomorrowDate;
        generateDayEvents(counter === 0 ? startDate : calcDate);
    }
};
genPeriodEvents();
// Write into the csv file
(() => {
    const writableStream = fs_1.default.createWriteStream("csvs/april-week-2-drivers.csv");
    const columns = ["driverId", "routeId", "carId", "timeTaken", "createdAt"];
    const stringifier = (0, csv_stringify_1.stringify)({ header: true, columns: columns });
    for (const index in trips) {
        const { driverId, eventTime, routeId, timeTaken, carId } = trips[index];
        stringifier.write([
            driverId,
            routeId,
            carId,
            timeTaken,
            new Date(eventTime),
        ]);
    }
    stringifier.pipe(writableStream);
})();
