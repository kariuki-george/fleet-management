import express from "express";
import { complaintsIngest, driverIngest, serviceIngest } from "../service";
import Chance from "chance";

const router = express.Router();

router.get("/health", (_, res) => {
  return res.json({ status: "OK" });
});

router.post("/driver", async (req, res) => {
  await driverIngest(!!req.body[0] ? req.body[0] : req.body, req.producer);
  return res.json(req.body);
});

router.post("/complaint", async (req, res) => {
  await complaintsIngest(!!req.body[0] ? req.body[0] : req.body, req.producer);
  return res.json({ status: "OK" });
});

router.post("/service", async (req, res) => {
  await serviceIngest(!!req.body[0] ? req.body[0] : req.body, req.producer);
  return res.json({ status: "OK" });
});

router.get("/gen/:time", async (req, res) => {
  const chance = new Chance();

  let time = Number(req.params.time);
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  while (time > 0) {
    await driverIngest(
      { name: chance.name(), carId: chance.guid(), start: chance.date() },
      req.producer
    );
    await sleep(1000);

    time--;
  }

  return res.json({ status: "OK" });
});

export default router;
