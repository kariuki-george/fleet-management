"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_stringify_1 = require("csv-stringify");
const _1 = require(".");
const events = [];
// Create events
(() => {
    // chance.
    // A round represents a day
    const totalCars = _1.cars.length;
    for (let round = 0; round < 7 * 3; round++) {
        const random = Math.floor(Math.random() * totalCars);
        events.push(_1.cars[random].carId);
    }
})();
// Write into the csv file
(() => {
    const writableStream = fs_1.default.createWriteStream("csvs/april-week-2-complaints.csv");
    const columns = ["carId"];
    const stringifier = (0, csv_stringify_1.stringify)({ header: true, columns: columns });
    for (const index in events) {
        stringifier.write([events[index]]);
    }
    stringifier.pipe(writableStream);
})();
