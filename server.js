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

db.connect(function(err) {
    if (err) throw err;
    startPrompt();
  });

  function startPrompt() {
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
      
    ]).then(function(answser) {
        switch(answser.choice) {
       case "View all deparment?": 
       viewALLDepartment();
       break;
       
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
       exitOut();
       break; 
        }
    })
  }

  function viewALLDepartment() {
    db.query("SELECT employee.first_name, employee.last_name, deparment.name As Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role;",
    function(error, respond) {
        if(error) throw error
        console.table(respond)
        startPrompt()
    })
  }

  function viewALLRoles() {
    db.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function(error, respond) {
        if(error) throw error
        console.table(respond)
        startPrompt()
    })
  }
  
  function viewALLEmployees() {
    db.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name,'',e.last_name) AS Manger FROM employee;",
    function(error, respond) {
        if(error) throw error
        console.table(respond)
        startPrompt()
    })
}

   var roleAdding = [];
   function selectRole() {
    db.query('SELECT + FROM role', function(error, respond) {
        if(error) throw error
        for(var i = 0; i < respond.length; ++) {
            roleAdding.push(respond[i].title)
        }
    })
    return roleAdding
   }

   
   var managerAdding = [];
   function selectManager() {
    db.query('SELECT first_name, last_name FROM employee WHERE manager_id IS NULL', function(error, respond) {
        if(error) throw error
        for(var i = 0; i < respond.length; ++) {
            managerAdding.push(respond[i].title)
        }
    })
    return managerAdding
   }
   
   function addEmployee() {
    inquirer
    .prompt([
        {
            name: "firstname",
            type: "input",
            message: "What is their first name?"
        },

        {
            name: "lastname",
            type: "input",
            message: "What is their last name?"
        },

        {
            name: "role",
            type: "input",
            message: "What is their role?",
            choices: selectRole()
        },

        {
            name: "option",
            type: "rawlist",
            message: "What is their manager name?",
            choices: selectManager()
        },

    ]).then(function(answser) {
        var roleId = selectRole().indexOf(answser.role) + 1 
        var managerId = selectManager().indexOf(answser.choice) + 1 
        db.query('Add to employee?', 
        {
            first_name: answser.first_name,
            last_name: answser.last_name,
            role_id: answser.roleId,
            manager_id: answser.managerId,

             }, function(error) {
                    if (error) throw error;
                    console.table(answser)
                    startPrompt();
             })
    })
   }