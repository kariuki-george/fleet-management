import { Producer } from "kafkajs";

const driverIngest = async (data: any, producer: Producer) => {
  console.log("driver", data);

  await producer.send({
    topic: "Drivers",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

const serviceIngest = async (data: any, producer: Producer) => {
  console.log("service", data);
  await producer.send({
    topic: "Service",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

const complaintsIngest = async (data: any, producer: Producer) => {
  console.log("complaint", data);
  await producer.send({
    topic: "Complaints",
    messages: [{ value: JSON.stringify(data), partition: 0 }],
  });
};

export { driverIngest, serviceIngest, complaintsIngest };
