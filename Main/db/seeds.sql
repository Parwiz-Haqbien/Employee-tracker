USE tracker_db;

SET FOREIGN_KEY_CHECKS = 0;
truncate roles;
truncate department;
truncate employee;
SET FOREIGN_KEY_CHECKS = 1;

insert INTO department(names)
values('Sales');
insert INTO department(names)
values('Engineering');
insert INTO department(names)
values('Finance');
insert INTO department(names)
values('Service');

-- Sales Department
insert INTO roles (title, salary, department_id)
values('Sales Manager', 40000, 1);

insert INTO roles(title, salary, department_id)
values('Salesperson',  40000, 1);

-- Engineering Department
insert INTO roles (title, salary, department_id)
values('Engineering Manager', 60000, 2);

insert INTO roles(title, salary, department_id)
values('Engineer',  60000, 2);

-- Finance Department
insert INTO roles (title, salary, department_id)
values('Finance Manager', 70000, 3);

insert INTO roles(title, salary, department_id)
values('Finance Person',  30000, 3);

-- Service Department
insert INTO roles (title, salary, department_id)
values('Service Manager', 70000, 4);

insert INTO roles(title, salary, department_id)
values('Service Person',  40000, 4);

insert INTO employee (first_name, last_name, role_id, manager_id)
values('Parwiz', 'Haqbien', 2, NULL);
insert INTO employee(first_name, last_name, role_id, manager_id)
values('Ali', 'Asghari', 2, 1);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;



