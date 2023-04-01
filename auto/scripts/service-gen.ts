import fs from "fs";
import { stringify } from "csv-stringify";
import { cars } from ".";
import Chance from "chance";

interface Events {
  carId: string;
  price: string;
}
const events: Events[] = [];
const chance = new Chance();

// Create events
(() => {
  // chance.

  // A round represents a day
  const totalCars = cars.length;

  for (let round = 0; round < 100; round++) {
    const random = Math.floor(Math.random() * totalCars);

    events.push({
      carId: cars[random].carId,
      price: chance.dollar({ max: 50000, min: 500 }).slice(1),
    });
  }
})();

// Write into the csv file

(() => {
  const writableStream = fs.createWriteStream("csvs/service.csv");
  const columns = ["carId", "amount"];
  const stringifier = stringify({ header: true, columns: columns });
  for (const index in events) {
    const { carId, price } = events[index];
    stringifier.write([carId, price]);
  }
  stringifier.pipe(writableStream);
})();
