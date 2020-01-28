# cummins_customer_api

REST API for customer management, built with the Serverless framework.

# Endpoints

POST - https://rpldlnzlfh.execute-api.us-east-1.amazonaws.com/dev/customers

GET - https://rpldlnzlfh.execute-api.us-east-1.amazonaws.com/dev/customers

GET - https://rpldlnzlfh.execute-api.us-east-1.amazonaws.com/dev/customers/{id}

DELETE - https://rpldlnzlfh.execute-api.us-east-1.amazonaws.com/dev/customers/{id}

## Getting Started

1. Install the serverless framework: `npm install -g serverless`
2. Deploy: `serverless deploy` (You'll need to configure the serverless CLI with your AWS credentials; follow [these instructions](https://www.youtube.com/watch?v=HSd9uYj2LJA))

### Prerequisites

- Node.js v12.x or greater
- An AWS account. You can sign up for a free account [here](http://aws.amazon.com/free)

## Built With

- [the serverless framework](https://serverless.com/) - CLI tool for building serverless apps
- [AWS Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - serverless cloud provider
- [Node.js](nodejs.org)

## Acknowledgments

- [pmuens/serverless-crud](https://github.com/pmuens/serverless-crud)
