'use strict';


/**
 * Create atm
 * This can only be done by the logged in user.
 *
 * body ATM Created atm object
 * no response value expected for this operation
 **/
exports.createATM = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Withdraw cash
 * A query that withdraws money from account
 *
 * id String unique id for atm
 * depositAmount String amount to deposit
 * no response value expected for this operation
 **/
exports.depositMoney = function(id,depositAmount) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns all atm
 * A query that returns all atm
 *
 * returns List
 **/
exports.getATM = function() {
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
 * Get a specific atm
 * A query that returns an atm by id
 *
 * id String unique id for customers
 * returns ATM
 **/
exports.getATMById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "createdAt",
  "customerId" : 6,
  "ExpiryOn" : "ExpiryOn",
  "id" : 0,
  "cardNo" : "cardNo",
  "passcode" : "passcode",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing atm
 * A query updates an atm information
 *
 * id String ATM object that needs to be added to the database
 * status ATM Updated atm object
 * no response value expected for this operation
 **/
exports.updateATM = function(id,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Withdraw cash
 * A query that withdraws money from account
 *
 * id String unique id for atm
 * withdrawAmount String amount to withdraw
 * no response value expected for this operation
 **/
exports.withdrawMoney = function(id,withdrawAmount) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

