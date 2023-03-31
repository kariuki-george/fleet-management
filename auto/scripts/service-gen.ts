import Chance from "chance";
import fs from "fs";
import { stringify } from "csv-stringify";

interface State {
  cars: string[];
  events: { carId: string; price: string }[];
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

    state.events.push({
      carId: state.cars[random],
      price: chance.dollar({ max: 50000, min: 500 }).slice(1),
    });
  }
})();

// Write into the csv file

(() => {
  const writableStream = fs.createWriteStream("csvs/service.csv");
  const columns = ["carId", "amount"];
  const stringifier = stringify({ header: true, columns: columns });
  for (const index in state.events) {
    const { carId, price } = state.events[index];
    stringifier.write([carId, price]);
  }
  stringifier.pipe(writableStream);
})();
