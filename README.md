# stockup
REST API for stock management, built with the Serverless framework. [Here's a walkthrough](https://blog.pusher.com/rest-api-serverless-framework/)

## Getting Started

1. Install the serverless framework: `npm install -g serverless`
2. Run `serverless install --url https://github.com/shalvah/stockup` to install the service
3. Install dependencies: `cd stockup && npm install`
4. Deploy: `serverless deploy` (You'll need to configure the serverless CLI with your AWS credentials; follow [these instructions](https://www.youtube.com/watch?v=HSd9uYj2LJA))

### Prerequisites
- Node.js v6.5.0 or greater
- An AWS account. You can sign up for a free account [here](http://aws.amazon.com/free)

## Built With

* [the serverless framework](https://serverless.com/) - CLI tool for building serverless apps
* [AWS Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - serverless cloud provider
* [Node.js](nodejs.org)

## Acknowledgments

* [pmuens/serverless-crud](https://github.com/pmuens/serverless-crud)
