const Engineer = require("../lib/engineer");

test("Can create a github.", () => {
  const testGithub = "riz1ash786";
  const employeeInstance = new Engineer(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "riz1ash786";
  const employeeInstance = new Engineer(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Rizwan",
    2,
    "riz1ash786@gmail.com",
    "riz1ash786"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
