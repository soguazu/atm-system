const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema;

const ATMSchema = new Schema({
    customerId: {
        type: String,
        ref: 'CustomerSchema',
        require: true
    },
    cardNo: {
        type: String,
        require: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    expireAt: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    }
});

ATMSchema.index({ cardNo: String, customerId: String });
const ATM = mongoose.model('ATM', ATMSchema);

const CustomerSchema = new Schema({
    bankiD: {
        type: String,
        required: true
    },
    account: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        require: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        index: {
            unique: true
        }
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    phone: {
        type: String,
        required: true
    },
    accountBalance: {
        type: Number,
        required: true,
        default: 0
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

const BankSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    }
});

const Bank = mongoose.model('Bank', BankSchema);

function validateCustomer(customer) {
    const Schema = {
        customerId: Joi.string()
            .trim()
            .required(),
        cardNo: Joi.string()
            .trim()
            .required(),
        firstName: Joi.string()
            .trim()
            .required(),
        lastName: Joi.string()
            .trim()
            .required(),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        createdAt: Joi.date().required(),
        phone: Joi.string()
            .max(11)
            .required(),
        accountBalance: Joi.number().required()
    };

    return Joi.validate(customer, Schema);
}

function validateATM(atm) {
    const Schema = {
        customerId: Joi.string()
            .trim()
            .required(),
        cardNo: Joi.string()
            .trim()
            .required(),
        token: Joi.string()
            .trim()
            .required(),
        createdAt: Joi.date().required(),
        expireAt: Joi.date().required(),
        status: Joi.string()
            .trim()
            .required()
    };

    return Joi.validate(atm, Schema);
}

function validateBank(bank) {
    const Schema = {
        name: Joi.string()
            .trim()
            .required()
    };

    return Joi.validate(bank, Schema);
}

module.exports = {
    ATM,
    validateATM,
    Customer,
    validateCustomer,
    Bank,
    validateBank
};
