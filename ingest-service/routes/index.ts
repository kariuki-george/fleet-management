import express from "express";
import { complaintsIngest, driverIngest, serviceIngest } from "../service";

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
  const service = [
    { carId: "6461918e-bb5a-58bb-8c60-d023140634c5", price: "5597.32" },
    { carId: "2496c194-9d4a-56e1-b4bd-90416126d6a5", price: "42590.95" },
  ];
  const complaints = [
    { carId: "677dca0d-10df-5b51-b150-c7e024ed855c" },
    { carId: "4929ff91-7bc0-56ec-8aa5-663ea2aed72e" },
  ];
  const drivers = [
    {
      driverId: "f50d1c57-0da6-5492-bd57-d435167237a0 ",
      routeId: "64de46eb-8721-5798-a9a8-c041645263ef",
      carId: "80af45d2-9066-5a72-b2fb-4b23cdba18b1",
      timeTaken: "1.7",
      createdAt: "1577864520000",
    },
    {
      driverId: "61bd843e-293e-5098-9493-bad347de67ad",
      routeId: "ef7d23c8-dd12-586e-80c7-d58cde43ef9d",
      carId: "02aa1e66-b3f9-5a4d-a33b-4ae0d2f96554",
      timeTaken: "2.7",
      createdAt: "1577864520000",
    },
  ];

  for (const index in [1, 2]) {
    await driverIngest(drivers[index], req.producer);
    await complaintsIngest(complaints[index], req.producer);
    await serviceIngest(service[index], req.producer);
  }

  return res.json({ status: "OK" });
});

export default router;
