DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

use tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    names VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
     id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL NOT NULL,
     department_id INT,
     PRIMARY KEY(id),
     FOREIGN KEY (department_id)
     REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name  VARCHAR(30) NOT NULL,
   last_name  VARCHAR(30) NOT NULL,
   roles_id INT,
   manager_id INT,
   FOREIGN KEY (roles_id)
   REFERENCES roles(id) ON DELETE CASCADE,
   FOREIGN KEY (manager_id),
   REFERENCES manager(id) ON DELETE CASCADE
);