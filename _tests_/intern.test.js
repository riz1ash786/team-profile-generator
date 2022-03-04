// My Attempt
const Intern = require("../lib/intern");

test("Can create school.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
