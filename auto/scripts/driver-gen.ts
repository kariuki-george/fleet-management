import Chance from "chance";
import fs from "fs";
import { stringify } from "csv-stringify";

enum DRIVINGSTATES {
  DRIVING = "DRIVING",
  ARRIVED = "ARRIVED",
  NOTSTARTED = "NOTSTARTED",
  PROBLEM = "PROBLEM",
  RESTING = "RESTING",
}
interface State {
  drivers: { name: string; uuid: string }[];
  events: {
    createdAt: Date;
    driverUUID: string;
    driverName: string;
    status: DRIVINGSTATES;
  }[];
  restingState: {[driverId:string]: number};
  drivingState: { [driverId: string]: { status: DRIVINGSTATES } };
}

const state: State = {
  drivers: [],
  drivingState: {},
  events: [],
  restingState: {},
};

const chance = new Chance();
// Create drivers
(() => {
  for (let count = 0; count < 10; count++) {
    state.drivers.push({ name: chance.name(), uuid: chance.guid() });
  }
})();
// Create Driver events
(() => {
  // Create NOTSTARTED states for each driver
  for (const index in state.drivers) {
    let driver = state.drivers[index];
    state.drivingState[driver.uuid] = { status: DRIVINGSTATES.NOTSTARTED };
    state.events.push({
      createdAt: new Date(),
      driverName: driver.name,
      driverUUID: driver.uuid,
      status: state.drivingState[driver.uuid].status,
    });
  }
})();
(() => {
  // Simulation
  let round = 0;
  while (round < 1000) {
    for (const index in state.drivers) {
      let driver = state.drivers[index];
      switch (state.drivingState[driver.uuid].status) {
        case DRIVINGSTATES.NOTSTARTED:
          state.drivingState[driver.uuid].status = DRIVINGSTATES.DRIVING;
          state.events.push({
            createdAt: new Date(),
            driverName: driver.name,
            driverUUID: driver.uuid,
            status: state.drivingState[driver.uuid].status,
          });
          break;
        case DRIVINGSTATES.DRIVING:
          const random = Math.random();
          state.drivingState[driver.uuid].status =
            random > 0.2 ? DRIVINGSTATES.ARRIVED : DRIVINGSTATES.PROBLEM;
          state.events.push({
            createdAt: new Date(),
            driverName: driver.name,
            driverUUID: driver.uuid,
            status: state.drivingState[driver.uuid].status,
          });
          break;
        case DRIVINGSTATES.ARRIVED:
          // This is rest time
          state.drivingState[driver.uuid].status = DRIVINGSTATES.RESTING;
          state.restingState[driver.uuid] = Date.now();
          break;
        case DRIVINGSTATES.RESTING:
          // Determine resting time
          // Based on hours
          // Rest averages from 2 to 24 hours
          // Define the range of rest times
          const T = [
            2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          ];
          // Define the probabilities for each rest time
          const probabilities = [
            0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1,
            0.05, 0.05, 0.05, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01,
            0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
          ];
          // Simulate a real-life scenario by selecting a random rest time based on the defined probabilities
          const randomRestTime =
            T.find(
              (_, i, __) =>
                Math.random() <
                probabilities.slice(0, i + 1).reduce((a, b) => a + b)
            ) || 0;
          state.drivingState[driver.uuid].status = DRIVINGSTATES.NOTSTARTED;
          state.events.push({
            createdAt: new Date(Date.now() + randomRestTime * 60 * 60 * 1000),
            driverName: driver.name,
            driverUUID: driver.uuid,
            status: state.drivingState[driver.uuid].status,
          });
          break;
        case DRIVINGSTATES.PROBLEM:
          state.drivingState[driver.uuid].status = DRIVINGSTATES.NOTSTARTED;
          state.events.push({
            createdAt: new Date(),
            driverName: driver.name,
            driverUUID: driver.uuid,
            status: state.drivingState[driver.uuid].status,
          });
          break;
        default:
          console.log("HI");
      }
    }
    round++;
  }
})();
// Write into the csv file
(() => {
  const writableStream = fs.createWriteStream("csvs/drivers.csv");
  const columns = ["createdAt", "status", "driverName", "driverUUID"];
  const stringifier = stringify({
    header: true,
    columns: columns,
  });
  for (const index in state.events) {
    const { createdAt, status, driverName, driverUUID } = state.events[index];
   
    stringifier.write([new Date(createdAt).toISOString(), status, driverName, driverUUID]);
  }
  stringifier.pipe(writableStream);
})();