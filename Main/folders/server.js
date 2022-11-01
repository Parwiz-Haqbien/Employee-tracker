const express = require('express');
const mysql = require ('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection (
    {
        host: 'localhost',
        //MySQL username
        user: 'root',
        //password for MySQL
        password: 'Rooney21@',
        database: '' // doing it now 
    }, console.log('This is connected to the file_db database that i will make it')
);
