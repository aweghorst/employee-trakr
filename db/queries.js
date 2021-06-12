const action = require("./connection");

class DB {
  constructor(db) {
    this.db = db;
  }

  //Get the List of Departments
  fetchDepartments() {
    return this.db.promise().query(`SELECT * FROM department;`);
  }

  //Get the List of Roles
  fetchRoles() {
    return this.db.promise().query(`SELECT * FROM role;`);
  }

  //Get the List of Employees
  fetchEmployees() {
    return this.db.promise().query(`SELECT * FROM employee;`);
  }

  //Add Department to table
  addDepartment(department) {
    return this.db.promise().query(`INSERT INTO department SET ?`, department);
  }

  //Add Role to Table
  addRole(role) {
    return this.db.promise().query(`INSERT INTO role SET ?`, role);
  }

  //Add Employee to table
  AddEmployee(employee) {
    return this.db.promise().query(`INSERT INTO employee SET ?`, employee);
  }

  //Update Employee Role in Table
  updateEmployee(employeeId, roleId) {
    return this.db
      .promise()
      .query(`UPDATE employee SET role_id = ? WHERE id = ?`, [
        roleId,
        employeeId,
      ]);
  }
}

module.exports = new DB(action);
