import express from "express";
import { conductorIngest, driverIngest, serviceIngest } from "../service";
const router = express.Router();

router.get("/health", (_, res) => {
  return res.json({ status: "OK" });
});

router.post("/driver", async (req, res) => {
  await driverIngest(req.body, req.producer);
  return res.json({ status: "OK" });
});

router.post("/conductor", async (req, res) => {
  await conductorIngest(req.body, req.producer);
  return res.json({ status: "OK" });
});

router.post("/service", async (req, res) => {
  await serviceIngest(req.body, req.producer);
  return res.json({ status: "OK" });
});

export default router;
