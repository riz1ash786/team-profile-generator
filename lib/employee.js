class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
    return "Employee";
    //   insert code here
  }
  getName() {
    //   insert code here
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
    //   insert code here
  }
}

module.exports = Employee;
