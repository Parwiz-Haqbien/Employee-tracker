const mysql = require ('mysql');
const inquirer = require('inquirer');
const terminalTable = require('console.table');

const db = mysql.createConnection (
    {
        host: 'localhost',
        //MySQL username
        user: 'root',
        //password for MySQL
        password: 'Rooney21@',
        database: 'tracker_db' 
    }, console.log('This is connected to the tracker_db database ')
);
