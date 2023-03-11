"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
// simple config setup
const broker = process.env.BROKER;
if (!broker) {
    throw new Error("Kafka broker url not provided");
}
const kafkajs_1 = require("kafkajs");
const producerSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kafka = new kafkajs_1.Kafka({
            clientId: "fleet-management-ingest",
            brokers: [broker],
        });
        const producer = kafka.producer({ allowAutoTopicCreation: true });
        console.log("Attempting to connect to kafka!");
        yield producer.connect();
        console.log("Connected to kafka successfully");
        return producer;
    }
    catch (error) {
        console.log(error);
        throw new Error("Couldn't connect to the kafka broker");
    }
});
app.use("*", (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.producer)
        next();
    req.producer = yield producerSetup();
    next();
}));
app.use("/", routes_1.default);
app.listen(5555, () => {
    console.log("Ingest service is listening on port 5555");
});
