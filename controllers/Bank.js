'use strict';

var utils = require('../utils/writer.js');
var Bank = require('../service/BankService');

module.exports.addBank = function addBank (req, res, next) {
  var name = req.swagger.params['name'].value;
  Bank.addBank(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBankById = function deleteBankById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Bank.deleteBankById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBankById = function findBankById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Bank.findBankById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBanks = function findBanks (req, res, next) {
  Bank.findBanks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBank = function updateBank (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Bank.updateBank(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
