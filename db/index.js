const inquirer = require("inquirer");
const connection = require("./connection");

//Main Menu
function showMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
        ],
      },
    ])
    .then(answer => {
      switch (answer.options) {
        case "View All Departments":
          displayDepartments();
          break;
        case "View All Roles":
          displayRoles();
          break;
        case "View All Employees":
          displayEmployees();
          break;
        case "Add a Department":
          createDepartment();
          break;
        case "Add a Role":
          createRole();
          break;
        case "Add an Employee":
          createEmployee();
          break;
        case "Update an Employee Role":
          UpdateRole();
          break;
      }
    });
}

/*********FUNCTIONS**********/

// View All Departments
function displayDepartments() {

}
// View All Roles
function displayRoles() {

}
// View All Employees
function displayEmployees() {

}
// Add a Department
function createDepartment() {

}
// Add a Role
function createRole() {

}
// Add an Employee
function createEmployee() {

}
// Update an Employee Role
function UpdateRole() {
  
}





