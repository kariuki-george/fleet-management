import { Producer } from "kafkajs";

const driverIngest = async (data: any, producer: Producer) => {
  await producer.send({
    topic: "Drivers",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

const serviceIngest = async (data: any, producer: Producer) => {
  await producer.send({
    topic: "Service",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

const conductorIngest = async (data: any, producer: Producer) => {
  await producer.send({
    topic: "Conductor",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

export { driverIngest, serviceIngest, conductorIngest };
