'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Customer.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustmerById = function deleteCustmerById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Customer.deleteCustmerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerByBank = function getCustomerByBank (req, res, next) {
  var bankId = req.swagger.params['bankId'].value;
  Customer.getCustomerByBank(bankId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerById = function getCustomerById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Customer.getCustomerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerByName = function getCustomerByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Customer.getCustomerByName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomers = function getCustomers (req, res, next) {
  Customer.getCustomers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomer = function updateCustomer (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Customer.updateCustomer(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
