'use strict';

let email = require('../models/email.model');

exports.findAll = function (req, res) {
    email.findAll(function (err, email) {
        console.log('controller');
        if (err) res.send(err);
        console.log('res', email);
        res.send(email);
    });
};

exports.create = function (req, res) {
    const newEmail = new email(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please fill in all required fields'});
    } else {
        email.create(newEmail, function (err, email) {
            if (err) res.send(err);

            res.json({error: false, message: 'Email sent', data: email});
        });
    }
};

exports.findById = function (req, res) {
    email.findById(req.params.id, function (err, email) {
        if (err) res.send(err);
        res.json(email);
    });
};

exports.delete = function (req, res) {
    email.delete(req.params.id, function (err) {
        if (err) res.send(err);
        res.json({error: false, message: 'Email deleted'})
    });
};
