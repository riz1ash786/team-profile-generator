// using Employee constructor
const Employee = require("../lib/employee");

// creates new employee object
test("creates an employee object", () => {
  const employee = new Employee("Rizwan", 86, "riz1ash786@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// gets employee name from getName()
test("gets employee name", () => {
  const employee = new Employee("Rizwan", 86, "riz1ash786@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id from getId()
test("gets employee ID", () => {
  const employee = new Employee("Rizwan", 86, "riz1ash786@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email from getEmail()
test("gets employee email", () => {
  const employee = new Employee("Rizwan", 86, "riz1ash786@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// gets employee role from getRole()
test("gets role of employee", () => {
  const employee = new Employee("Rizwan", 86, "riz1ash786@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
