DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

use tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(30) NOT NULL 
);

CREATE TABLE roles (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30),
     salary DECIMAL (5,2),
     department_id INT,
     FOREIGN KEY (department_id)
     REFERENCES department(id)
     ON DELETE SET NULL
)