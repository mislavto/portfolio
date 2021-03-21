'use strict';

const dbConn = require('../../config/db.config');

let email = function (email) {
    this.sender_name = email.sender_name;
    this.sender_email = email.sender_email;
    this.message = email.message;
};

email.create = function (newEmail, result) {
    dbConn.query("INSERT INTO email set ?", email, function (err, res) {
        if (err) {
            console.error("error: ", err)

            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

email.findById = function (id, result) {
    dbConn.query("Select * from email where id = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

email.findAll = function (result) {
    dbConn.query("Select * from email", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            console.log("emails: ", res);
            result(null, res);
        }
    });
};

email.delete = function (id, result) {
    dbConn.query("DELETE FROM email WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = email;
