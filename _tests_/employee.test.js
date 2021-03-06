const Employee = require("../lib/employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Rizwan";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Rizwan", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "riz1ash786@gmail.com";
  const employeeInstance = new Employee("riz1ash786@gmail.com", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Test name through getName method.", () => {
  const testName = "Rizwan";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Rizwan", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Test email through getEmail method.", () => {
  const testEmail = "riz1ash786@gmail.com";
  const employeeInstance = new Employee("Rizwan", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Rizwan", 2, "riz1ash786@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
