const inquirer = require('inquirer');
const {connection} = require('./Main/db/connection');
const terminalTable = require('console.table');





  init = () => {
    console.log('*********************')
    console.log('*                   *')
    console.log('*     Welcome!      *')
    console.log('*                   *')
    console.log('*********************')
  }
  function init() {
    inquirer
      .prompt([ 
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
      
    ]).then((res) => {
        let choice = res.choice;
        switch(choice) {
            case "View all roles?": 
            viewALLRoles();
            break;
     
            case "View all employees?": 
            viewALLEmployees();
            break;
     
            case "add a department?": 
            addDepartment();
            break;
     
            case "add a role?": 
            addRole();
            break;
     
            case "add a employee?": 
            addEmployee();
            break;
     
            case "update a employee role?": 
            updateEmployee();
            break;
     
            case "would you like to exist?": 
            connection.end();
            break; 
             }
        }
    )};

    function viewALLDepartment() {
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

      function viewALLRoles() {
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

      function viewALLEmployees() {
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
                    message: "What is you department name?"
                },
            ])
            .then((answer) => {
                connection.query(
                  "INSERT INTO department SET ?",
                  {
                    name: answer.departmentName,
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
              `SELECT department.id AS "Dept ID", department.name AS "Dept Name", title AS "Role Title", salary, department_id AS "Role Table Department ID"
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
                    message: "What is the salary",
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

   function updateEmployee() {
    db.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id= role.id;", function(error,respond) {
        if (error) throw error 
        console.log(respond)
        inquirer
        .prompt([
            {
                name: 'lastname',
                type: 'rawlist',
                choices: function() {
                    var lastname = [];
                    for (var i = 0; i<respond.length; i++) {
                        lastname.push(respond[i].last_name);
                    }
                    return lastname;
                },
                message: ' what is your Employees last name?',
            },
            {
                name: 'role',
                type: 'rawlist',
                message: 'what is the employees new title?',
                choices: selectRole()
            }
        ]).then(function(val) {
            var roleID = selectRole().indexOf(val.role) + 1
            db.query('where should the new update be ?' ,
            {
                last_name: val.lastname
            },
            {
                role_id: roleId
            },
            function(error) {
                if (error) throw error
                console.log(val)
                startPrompt()
            })
        });
    });
   }


   function addDepartment() {
    inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'what department do you want to add to ?'
        },
    ]).then(function(respond) {
    var list = db.query (
        "should it be placed into the department set?",
        {
            name: respond.name
        },
        function(error) {
            if (error) throw error
        console.log(val)
        startPrompt()
        }
    )
   })
   }