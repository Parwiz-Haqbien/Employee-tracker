
INSERT INTO department (names)
VALUES ('Fianance'),
('legal'), 
('Engineering'),
('sales');

-- Employees role seeds--
INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant',80000, 1),
('Lead accountant',75000, 3),
('sales',55000, 2),
('sales assistance',45000, 5);


-- Employee seeds
INSERT INTO employee (first_name, last_name , roles_id , manager_id)
VALUES ('John' , 'Merry' , 2 , 4),
('Leo' , 'Messi' , 1 , 3),
('Harry' , 'Maguire' , 3 , 5),
('Ali' , 'Mohammad' , 4 , 1),
('Hamza' , 'Joyndia' , 5 , 2);



