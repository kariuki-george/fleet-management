"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_stringify_1 = require("csv-stringify");
const _1 = require(".");
const chance_1 = __importDefault(require("chance"));
const events = [];
const chance = new chance_1.default();
// Create events
(() => {
    // chance.
    // A round represents a day
    const totalCars = _1.cars.length;
    for (let round = 0; round < 2 * 7; round++) {
        const random = Math.floor(Math.random() * totalCars);
        events.push({
            carId: _1.cars[random].carId,
            amount: chance.dollar({ max: 50000, min: 500 }).slice(1),
        });
    }
})();
// Write into the csv file
(() => {
    const writableStream = fs_1.default.createWriteStream("csvs/april-week-2-service.csv");
    const columns = ["carId", "amount"];
    const stringifier = (0, csv_stringify_1.stringify)({ header: true, columns: columns });
    for (const index in events) {
        const { carId, amount } = events[index];
        stringifier.write([carId, amount]);
    }
    stringifier.pipe(writableStream);
})();
