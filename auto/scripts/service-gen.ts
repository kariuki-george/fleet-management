import fs from "fs";
import { stringify } from "csv-stringify";
import { cars } from ".";
import Chance from "chance";

interface Events {
  carId: string;
  amount: string;
}
const events: Events[] = [];
const chance = new Chance();

// Create events
(() => {
  // chance.

  // A round represents a day
  const totalCars = cars.length;

  for (let round = 0; round < 2 * 7; round++) {
    const random = Math.floor(Math.random() * totalCars);

    events.push({
      carId: cars[random].carId,
      amount: chance.dollar({ max: 50000, min: 500 }).slice(1),
    });
  }
})();

// Write into the csv file

(() => {
  const writableStream = fs.createWriteStream("csvs/april-week-2-service.csv");
  const columns = ["carId", "amount"];
  const stringifier = stringify({ header: true, columns: columns });
  for (const index in events) {
    const { carId, amount } = events[index];
    stringifier.write([carId, amount]);
  }
  stringifier.pipe(writableStream);
})();
