const inquirer = require("inquirer");
const db = require("./db/queries");
const cTable = require("console.table");

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
    .then(choice => {
      switch (choice.mainMenu) {
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
  db.fetchDepartments()
    .then(([rows, fields]) => {
      const departments = rows;
      console.log("\n");
      console.log("DEPARTMENTS TABLE", "\n");
      console.table(departments);
      console.log("*****************************************");
    })
    .then(() => showMenu());
}
// View All Roles
function displayRoles() {
  db.fetchRoles()
    .then(([rows, fields]) => {
      const roles = rows;
      console.log("\n");
      console.log("ROLES TABLE", "\n");
      console.table(roles);
      console.log("*****************************************");
    })
    .then(() => showMenu());
}
// View All Employees
function displayEmployees() {
  db.fetchEmployees()
    .then(([rows, fields]) => {
      const employees = rows;
      console.log("\n");
      console.log("EMPLOYEE TABLE", "\n");
      console.table(employees);
      console.log("*****************************************");
    })
    .then(() => showMenu());
}
// Add a Department
function createDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Department Name?",
      },
    ])
    .then(result => {
      const name = result;
      db.addDepartment(name)
        .then(() => {
          console.log("*****************************************");
          console.log(`The ${name.name} department has been added`);
          console.log("*****************************************");
        })
        .then(() => showMenu());
    });
}
// Add a Role
function createRole() {
  db.fetchDepartments().then(([rows, fields]) => {
    const departments = rows;
    const departmentList = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the new job title?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary for the newly created position?",
        },
        {
          type: "list",
          name: "department_id",
          message: "Select the department of the newly created position.",
          choices: departmentList,
        },
      ])
      .then(result => {
        const name = result;
        db.addRole(name)
          .then(() => {
            console.log("*****************************************");
            console.log(`The ${name.title} role has been created.`);
            console.log("*****************************************");
          })
          .then(() => showMenu());
      });
  });
}

// Add an Employee
function createEmployee() {
  db.fetchRoles().then(([rows, fields]) => {
    const roles = rows;
    const roleList = roles.map(({ id, title, salary, department_id }) => ({
      name: title,
      value: id,
    }));
    db.fetchEmployees().then(([rows, fields]) => {
      const employees = rows;
      const employeeList = employees.map(
        ({ id, first_name, last_name, role_id, manager_id }) => ({
          name: `${first_name} ${last_name}`,
          value: id,
        })
      );
      employeeList.push({
        name: "None",
        value: null,
      });
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the Employee's first name?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the Employee's last name?",
          },
          {
            type: "list",
            name: "role_id",
            message: "What is the Employee's job title?",
            choices: roleList,
          },
          {
            type: "list",
            name: "manager_id",
            message: "Who is the Employee's Manager?",
            choices: employeeList,
          },
        ])
        .then(result => {
          const name = result;
          db.AddEmployee(name)
            .then(() => {
              console.log("*****************************************");
              console.log(
                `${name.first_name} ${name.last_name} has been added`
              );
              console.log("*****************************************");
            })
            .then(() => showMenu());
        });
    });
  });
}
// Update an Employee Role
function UpdateRole() {
  db.fetchEmployees().then(([rows, fields]) => {
    const employees = rows;
    const employeeList = employees.map(
      ({ id, first_name, last_name, role_id, manager_id }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
      })
    );
    db.fetchRoles().then(([rows, fields]) => {
      const roles = rows;
      const roleList = roles.map(({ id, title, salary, department_id }) => ({
        name: title,
        value: id,
      }));
      inquirer
        .prompt([
          {
            type: "list",
            name: "employeeId",
            message: "Select the Employee to update",
            choices: employeeList,
          },
          {
            type: "list",
            name: "roleId",
            message: "Select the New Role",
            choices: roleList,
          },
        ])
        .then(result => {
          const name = result;
          db.updateEmployee(result.employeeId, result.roleId)
            .then(() => {
              console.log("*****************************************");
              console.log(`Update successful`);
              console.log("*****************************************");
            })
            .then(() => showMenu());
        });
    });
  });
}

showMenu();
