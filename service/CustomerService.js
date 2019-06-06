'use strict';


/**
 * Create account
 * This can only be done by the logged in user.
 *
 * body Bank Created customer object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a customer by id
 * A query that delete a customer by given id
 *
 * id String unique id given to every customer
 * no response value expected for this operation
 **/
exports.deleteCustmerById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all customers in a specific bank
 * A query that returns all customer by bank
 *
 * bankId String A query that gets all customers by bank
 * returns Customers
 **/
exports.getCustomerByBank = function(bankId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a specific customer
 * A query that returns a customer by id
 *
 * id String unique id for customers
 * returns Customer
 **/
exports.getCustomerById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "bankId" : 6,
  "phone" : "phone",
  "id" : 0,
  "accountBalance" : 1,
  "account" : "fixed",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a specific customer by name
 * A query that returns a customer by name
 *
 * name String A query that gets customers by name
 * returns Customer
 **/
exports.getCustomerByName = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "bankId" : 6,
  "phone" : "phone",
  "id" : 0,
  "accountBalance" : 1,
  "account" : "fixed",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all customers
 * A query that returns all customers
 *
 * returns List
 **/
exports.getCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing customer
 * A query updates customer information
 *
 * id String Bank object that needs to be added to the database
 * body Customer Updated customer object
 * no response value expected for this operation
 **/
exports.updateCustomer = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

