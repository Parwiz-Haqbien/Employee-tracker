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
);

CREATE TABLE employee (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name  VARCHAR(30),
   last_name  VARCHAR(30),
   roles_id INT,
   manager_id INT,
   FOREIGN KEY (roles_id)
   REFERENCES roles(id),
   FOREIGN KEY (manager_id)
   REFERENCES manager(id),
);