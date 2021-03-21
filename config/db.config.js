'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'toor123',
    database : 'portfolio'
});

dbConn.connect(function (err) {
    if(err) throw err;

    console.log('Connection success');
});

module.exports = dbConn;
