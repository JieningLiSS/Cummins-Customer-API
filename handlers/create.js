"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require("uuid");

module.exports = data => {
  const params = {
    TableName: "employees",
    Item: {
      name: data.name,
      address: data.address,
      id: uuid.v1()
    }
  };
  return dynamoDb
    .put(params)
    .promise()
    .then(result => params.Item);
};
