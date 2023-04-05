import fs from "fs";
import { stringify } from "csv-stringify";
import { cars } from ".";

const events = [];

// Create events
(() => {
  // chance.

  // A round represents a day
  const totalCars = cars.length;

  for (let round = 0; round < 7 * 3; round++) {
    const random = Math.floor(Math.random() * totalCars);
    events.push(cars[random].carId);
  }
})();

// Write into the csv file

(() => {
  const writableStream = fs.createWriteStream(
    "csvs/april-week-2-complaints.csv"
  );
  const columns = ["carId"];
  const stringifier = stringify({ header: true, columns: columns });
  for (const index in events) {
    stringifier.write([events[index]]);
  }
  stringifier.pipe(writableStream);
})();
