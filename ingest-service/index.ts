import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.json());

// simple config setup
const broker = process.env.BROKER;
if (!broker) {
  throw new Error("Kafka broker url not provided");
}

// Setup kafka globally
declare global {
  namespace Express {
    export interface Request {
      producer: Producer;
    }
  }
}
import { Kafka, Producer } from "kafkajs";

const producerSetup = async () => {
  try {
    const kafka = new Kafka({
      clientId: "fleet-management-ingest",
      brokers: [broker],
    });
    const producer = kafka.producer({ allowAutoTopicCreation: true });
    console.log("Attempting to connect to kafka!");
    await producer.connect();

    console.log("Connected to kafka successfully");

    return producer;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to the kafka broker");
  }
};

app.use("*", async (req, _, next) => {
  if (req.producer) next();
  req.producer = await producerSetup();
  next();
});

app.use("/", routes);

app.listen(5555, () => {
  console.log("Ingest service is listening on port 5555");
});
