"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require("uuid");

module.exports = data => {
  const params = {
    TableName: "customers",
    Item: {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      emailAddress: data.emailAddress,
      id: uuid.v1()
    }
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(result => params.Item);
};
