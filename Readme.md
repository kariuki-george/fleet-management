# Fleet Management

## Installing 

``` git clone https://github.com/smiley-geek/fleet-management.git
    
    docker-compose up -d

``` 

## Test

Navigate to http://localhost:5550 - apigateway url 
Expexted output 
```
{ status: "OK"}
```

## Ingest Microservice
- /health -> {status: "OK"}
- /driver -> {status: "OK"}
- /conductor -> {status: "OK"}
- /service -> {status: "OK"} 

## Connecting to kafka

- http://localhost:5558  -> via local network
- http://kafka-fleet-management:9092   -> via docker network

