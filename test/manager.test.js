// using Manager constructor
const Manager = require("../lib/manager");

// creates new manager object
test("creates a Manager object", () => {
  const manager = new Manager("Rizwan", 86, "riz1ash@hotmail.co.uk", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of manager", () => {
  const manager = new Manager("Rizwan", 86, "riz1ash@hotmail.co.uk");

  expect(manager.getRole()).toEqual("Manager");
});
