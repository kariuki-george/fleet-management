"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chance_1 = __importDefault(require("chance"));
const fs_1 = __importDefault(require("fs"));
const csv_stringify_1 = require("csv-stringify");
const state = {
    cars: [],
    events: [],
};
const chance = new chance_1.default();
// Create cars
(() => {
    for (let count = 0; count < 10; count++) {
        state.cars.push(chance.guid());
    }
})();
// Create events
(() => {
    // chance.
    // A round represents a day
    const totalCars = state.cars.length;
    for (let round = 0; round < 100; round++) {
        const random = Math.floor(Math.random() * totalCars);
        state.events.push(state.cars[random]);
    }
})();
// Write into the csv file
(() => {
    const writableStream = fs_1.default.createWriteStream("csvs/complaints.csv");
    const columns = ["carId"];
    const stringifier = (0, csv_stringify_1.stringify)({ header: true, columns: columns });
    for (const index in state.events) {
        stringifier.write([state.events[index]]);
    }
    stringifier.pipe(writableStream);
})();
