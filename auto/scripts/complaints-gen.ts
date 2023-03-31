import Chance from "chance";
import fs from "fs";
import { stringify } from "csv-stringify";

interface State {
  cars: string[];
  events: string[];
}

const state: State = {
  cars: [],
  events: [],
};
const chance = new Chance();

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
  const writableStream = fs.createWriteStream("csvs/complaints.csv");
  const columns = ["carId"];
  const stringifier = stringify({ header: true, columns: columns });
  for (const index in state.events) {
    stringifier.write([state.events[index]]);
  }
  stringifier.pipe(writableStream);
})();
