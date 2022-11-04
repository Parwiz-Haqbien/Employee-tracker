--department seeds--
INSERT INTO department (names)
VALUES ('Fianance'),

INSERT INTO department (names)
VALUES ('Legal'),

INSERT INTO department (names)
VALUES ('Engineering'),

INSERT INTO department (names)
VALUES ('Sales'),

-- Employees role seeds--
INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant','80,000', 1),

INSERT INTO roles (title, salary, department_id)
VALUES ('Lead accountant','75,000', 3),

INSERT INTO roles (title, salary, department_id)
VALUES ('sales','55,000', 2),

INSERT INTO roles (title, salary, department_id)
VALUES ('sales assistance','45,000', 5),

-- Employee seeds
INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('John' , 'Merry' , 2 , 4),

INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('Leo' , 'Messi' , 1 , 3),

INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('Harry' , 'Maguire' , 3 , 5),

INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('Ali' , 'Mohammad' , 4 , 1),

INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('Hamza' , 'Joyndia' , 5 , 2),

-- selecting all for creating tables
SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee; 
