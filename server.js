const inquirer = require('inquirer');
const {connection} = require('./Main/db/connection');
const terminalTable = require('console.table');
  
  function init() {
    inquirer
      .prompt(
        {
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
          "Exit"
        ]
    }
      
          ).then((res) => {
        let choice = res.choice;
        switch(choice) {
            case "View all departments":
            viewAllDepartment();
            break;

            case "View all roles": 
            viewAllRoles();
            break;
     
            case "View all employees": 
            viewAllEmployees();
            break;
     
            case "Add a department": 
            addDepartment();
            break;
     
            case "Add a role": 
            addRole();
            break;
     
            case "Add an employee": 
            addEmployee();
            break;
     
            case "Update employee role": 
            updateEmployeeId();
            break;
     
            case "Exist": 
            connection.end();
            break; 
             }
           });

    function viewAllDepartment() {
        setTimeout(() => {
          let query = "SELECT * FROM department";
          connection.query(query, function (err, res) {
            if (err) throw err;
            {
              console.table(res);
            }
            init();
          });
        }, 1000);
      }

      function viewAllRoles() {
        setTimeout(() => {
          let query = "SELECT * FROM roles";
          connection.query(query, function (err, res) {
            if (err) throw err;
            {
              console.table(res);
            }
            init();
          });
        }, 1000);
      }

      function viewAllEmployees() {
        setTimeout(() => {
          let query = "SELECT * FROM employee";
          connection.query(query, function (err, res) {
            if (err) throw err;
            {
              console.table(res);
            }
            init();
          });
        }, 1000);
      }


      function addDepartment() {
        connection.query(`SELECT * FROM department`, (err, res) => {
          if (err) throw err;
          console.table(res);
        });
        setTimeout(() => {
            inquirer
            .prompt([
                {
                    name: "departmentName",
                    type: "input",
                    message: "What would you like to call your department?"
                },
            ])
            .then((answer) => {
                connection.query(
                  "INSERT INTO department SET ?",
                  {
                    names: answer.departmentName,
                  },
                  function (err) {
                    if (err) {
                      throw err;
                    } else {
                      let query = "SELECT * FROM department";
                      connection.query(query, function (err, res) {
                        if (err) throw err;
                        {
                          console.table(res);
                        }
                        init();
                      });
                    }
                  }
                );
              });
          }, 1000);
        }

        function addRole() {
            connection.query(
              `SELECT department.id AS "Dept ID", department.names AS "Dept Name", title AS "Role Title", salary, department_id AS "Role Table Department ID"
                  FROM department
                  LEFT JOIN roles r 
                  ON department.id = department_id;`,
              (err, res) => {
                if (err) throw err;
                console.table(res);
              }
            );
            setTimeout(() => {
              inquirer;
              inquirer
                .prompt([
                  {
                    name: "roleTitle",
                    type: "input",
                    message: "What is the role title",
                  },
        
                  {
                    name: "roleSalary",
                    type: "input",
                    message: "What is the salary for this role",
                  },
                  {
                    name: "departmentId",
                    type: "input",
                    message: "What is the department id?",
                  },
                ])
                .then(function (answer) {
                  connection.query(
                    "INSERT INTO roles SET ?",
                    {
                      title: answer.roleTitle,
                      salary: answer.roleSalary,
                      department_id: answer.departmentId,
                    },
                    function (err) {
                      if (err) {
                        throw err;
                      } else {
                        let query = `SELECT * FROM roles`;
                        connection.query(query, function (err, res) {
                          if (err) throw err;
                          {
                            console.table(res);
                          }
                          init();
                        });
                      }
                    }
                  );
                });
            }, 1000);
        }

        function addEmployee() {
          connection.query(
            `SELECT r.id AS 'Role Id', title AS Title, CONCAT(first_name," ",last_name) AS Name, e.id AS 'Id #'
                  FROM roles r
                  LEFT JOIN employee e
                  ON e.roles_id = r.id;`,
            (err, res) => {
              if (err) throw err;
              console.table(res);
            }
          );
          setTimeout(() => {
            inquirer
              .prompt([
                {
                  name: "employeeFirst",
                  type: "input",
                  message: "What is the employee's first name?",
                },
                {
                  name: "employeeLast",
                  type: "input",
                  message: "What is the employee's last name?",
                },
                {
                  name: "employeeRoleId",
                  type: "input",
                  message: "What is the employee's role id?",
                },
                {
                  name: "managerId",
                  type: "input",
                  message: "What is the employee's manager's id?",
                
                },
              ])
              .then(function (answer) {
                connection.query(
                  "INSERT INTO employee SET ?",
                  {
                    first_name: answer.employeeFirst,
                    last_name: answer.employeeLast,
                    roles_id: answer.employeeRoleId,
                    manager_id: answer.managerId,
                  },
                  function (err) {
                    if (err) {
                      throw err;
                    } else {
                      let query = `SELECT r.id AS 'Role Id', title AS Title, CONCAT(first_name," ",last_name) AS Name, e.id AS 'Id #'
                        FROM roles r
                        LEFT JOIN employee e
                        ON e.roles_id = r.id;`;
                      connection.query(query, function (err, res) {
                        if (err) throw err;
                        {
                          console.table(res);
                        }
                        init();
                      });
                    }
                  }
                );
              });
          }, 1000);
        }
        function updateEmployeeId (){
            connection.query(
                `SELECT r.id AS 'Role Id', title AS Title, CONCAT(first_name," ",last_name) AS Name, e.id AS 'Id #'
                FROM roles r
                LEFT JOIN employee e
                ON e.roles_id = r.id;`,
                (err, res) => {
                  if (err) throw err;
                  console.table(res);
                }
              );
              setTimeout(() => {
                inquirer
                  .prompt([
                    {
                      name: "employeeID",
                      type: "input",
                      message: "What is the employee's id you would like to update?",
                    },
          
                    {
                      name: "updateEmployeeRole",
                      type: "input",
                      message: "What is the new role id?",
                    },
                  ])
                  .then((answer) => {
                    connection.query(
                      `UPDATE employee SET roles_id  = ${answer.updateEmployeeRole}
                     WHERE id = ${answer.employeeID};`,
                      (err) => {
                        if (err) {
                          throw err;
                        } else {
                          connection.query(
                            `SELECT r.id AS 'Role Id', title AS Title, CONCAT(first_name," ",last_name) AS Name, e.id AS 'Id #'
                            FROM roles r
                            LEFT JOIN employee e
                            ON e.roles_id = r.id;`,
                            (err, res) => {
                              if (err) throw err;
                              console.table(res);
                              init();
                            }
                          );
                        }
                      }
                    );
                  });
              }, 1000);
            }
        }
    init();

