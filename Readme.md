# Fleet Management

## Installing

```
git clone https://github.com/smiley-geek/fleet-management.git

create .env file in ingest-service folder

add BROKER= kafka-fleet-management:9092

docker-compose up -d
```

## Test

Navigate to http://localhost:5550/ingest/health - apigateway url
Expexted output

```
{ status: "OK"}
```

## Ingest Microservice

- http://localhost:5550/ingest/{route}

- /health -> `{status: "OK"}`
- /driver -> `{status: "OK"}`
- /complaint -> `{status: "OK"}`
- /service -> `{status: "OK"}`
- /gen/:time -> `{status: "OK"}`

## Connecting to kafka

- http://localhost:5558 -> via local network
- http://kafka-fleet-management:9092 -> via docker network

## Kafka

- Driver Data goes to Driver topic
- Service Data goes to Service topic
- complaint Data goes to complaints topic

- At the moment, the data is not validated by the ingest service so any data in json format is acceptable.

## Nifi

- Read the access-nifi.txt file in the nifi directory on how to access nifi.

## Auto

- Creates random events and saves them to a csv files
- Data types:

```
car: {
    driverId: string;
    driverName: string;
    carId: string;
}
```

```
routes: {
    routeId: string;
    amount: string;
    start: string;
    dest: string;
}
```

```
service events: {
    carId: string;
    price: string
}
```

```
driver events: {
    driverId: string;
    eventTime: string;
    routeId: string
    timeTaken: string
    carId: string
}
```

```
complaints events: {
    carId: string
}
```

## Db

### Create Tables

```
CREATE TABLE Drivers(driverId varchar(100), carId varchar(100),routeId varchar(100), createdAt varchar(100), timeTaken varchar(10) );
CREATE TABLE Complaints(carId varchar(100));
CREATE TABLE Service(carId varchar(100), price varchar(100));

```

### Count number of items per table

```
 select count(*) from Drivers;
 select count(*) from Service;
 select count(*) from Complaints;

```

## Poweroff

```
docker-compose down
```
