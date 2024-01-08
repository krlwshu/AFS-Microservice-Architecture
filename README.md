AFS Microservices

## Backend services (node js, express mvc)
- workflow service
- applicant service
- branch service
- auth service
- visa auth service

## Web applications

- web app applicant (react js app that interacts with applicant service
- web app branch (react js app that interacts with branch service
- web app admin (react js app that interacts with the admin service)

## Kafka events

for interaction between different services through events such as the triggering of workflows steps, notifying other services, posting events for OSS system to ingest (i.e. Grafana etc.)

- kafka service (servces as a message broker for consumers/producers to access topics)
- kafka ui (testing tool to visualize kafka messages etc.)


