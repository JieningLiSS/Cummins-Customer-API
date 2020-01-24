"use strict";

const addCustomer = require("./handlers/create");
const viewCustomer = require("./handlers/view");
const listCustomers = require("./handlers/list");
const removeCustomer = require("./handlers/remove");

const create = (event, context, callback) => {
  const data = JSON.parse(event.body);
  addCustomer(data)
    .then(result => {
      const response = { body: JSON.stringify(result) };
      callback(null, response);
    })
    .catch(callback);
};

const list = (event, context, callback) => {
  listCustomers()
    .then(result => {
      const response = { body: JSON.stringify(result) };
      callback(null, response);
    })
    .catch(callback);
};

const view = (event, context, callback) => {
  viewCustomer(event.pathParameters.id)
    .then(result => {
      const response = { body: JSON.stringify(result) };
      callback(null, response);
    })
    .catch(callback);
};

const remove = (event, context, callback) => {
  removeCustomer(event.pathParameters.id)
    .then(result => {
      const response = {
        body: JSON.stringify({ message: "Customer removed." })
      };
      callback(null, response);
    })
    .catch(callback);
};

module.exports = {
  create,
  view,
  remove,
  list
};
