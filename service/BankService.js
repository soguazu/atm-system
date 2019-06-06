'use strict';


/**
 * Add a new bank
 * 
 *
 * name Bank Bank object that needs to be added to the store
 * returns Bank
 **/
exports.addBank = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "customerId" : 6,
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a bank by id
 * A query that delete a bank by given id
 *
 * id String unique id given to every bank
 * no response value expected for this operation
 **/
exports.deleteBankById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Bank by id
 * A query that finds a specific bank by id
 *
 * id Long id values that need to be considered for filter
 * returns List
 **/
exports.findBankById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "customerId" : 6,
  "name" : "name",
  "id" : 0
}, {
  "customerId" : 6,
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all bank
 * A query that returns all created bank
 *
 * returns List
 **/
exports.findBanks = function() {
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
 * Update an existing bank
 * A query updates bank information
 *
 * id String Bank object that needs to be added to the database
 * body Bank Updated user object
 * no response value expected for this operation
 **/
exports.updateBank = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

