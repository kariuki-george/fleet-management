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
Object.defineProperty(exports, "__esModule", { value: true });
exports.conductorIngest = exports.serviceIngest = exports.driverIngest = void 0;
const driverIngest = (data, producer) => __awaiter(void 0, void 0, void 0, function* () {
    yield producer.send({
        topic: "Drivers",
        messages: [{ value: JSON.stringify(data), partition: 0 }],
    });
    yield producer.disconnect();
});
exports.driverIngest = driverIngest;
const serviceIngest = (data, producer) => __awaiter(void 0, void 0, void 0, function* () {
    yield producer.send({
        topic: "Service",
        messages: [{ value: JSON.stringify(data), partition: 0 }],
    });
    yield producer.disconnect();
});
exports.serviceIngest = serviceIngest;
const conductorIngest = (data, producer) => __awaiter(void 0, void 0, void 0, function* () {
    yield producer.send({
        topic: "Conductor",
        messages: [{ value: JSON.stringify(data), partition: 0 }],
    });
    yield producer.disconnect();
});
exports.conductorIngest = conductorIngest;
