# Fleet Management

## Installing 

``` 
git clone https://github.com/smiley-geek/fleet-management.git

create .env file in ingest-service folder

add BROKER= kafka-fleet-management:9092 

docker-compose up -d
``` 

## Test

Navigate to http://localhost:5550 - apigateway url 
Expexted output 
```
{ status: "OK"}
```

## Ingest Microservice
- http://localhost:5550/{route}

- /health -> ```{status: "OK"}```
- /driver -> ```{status: "OK"}```
- /conductor -> ```{status: "OK"}```
- /service -> ```{status: "OK"}```

## Connecting to kafka

- http://localhost:5558  -> via local network
- http://kafka-fleet-management:9092   -> via docker network


## Kafka
- Driver Data goes to Driver topic 
- Service Data goes to Service topic 
- Conductor Data goes to Conductor topic 

- At the moment, the data is not validated by the ingest service so any data in json format is acceptable. 