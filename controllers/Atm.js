'use strict';

var utils = require('../utils/writer.js');
var Atm = require('../service/AtmService');

module.exports.createATM = function createATM (req, res, next) {
  var body = req.swagger.params['body'].value;
  Atm.createATM(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.depositMoney = function depositMoney (req, res, next) {
  var id = req.swagger.params['id'].value;
  var depositAmount = req.swagger.params['depositAmount'].value;
  Atm.depositMoney(id,depositAmount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getATM = function getATM (req, res, next) {
  Atm.getATM()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getATMById = function getATMById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Atm.getATMById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateATM = function updateATM (req, res, next) {
  var id = req.swagger.params['id'].value;
  var status = req.swagger.params['status'].value;
  Atm.updateATM(id,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.withdrawMoney = function withdrawMoney (req, res, next) {
  var id = req.swagger.params['id'].value;
  var withdrawAmount = req.swagger.params['withdrawAmount'].value;
  Atm.withdrawMoney(id,withdrawAmount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
