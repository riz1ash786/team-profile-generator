// using Engineer constructor
const Engineer = require("../lib/engineer");

// creating new engineer object
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Rizwan",
    86,
    "riz1ash786@gmail.com",
    "riz1ash786"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// gets engineer github from getGithub()
test("gets engineer github value", () => {
  const engineer = new Engineer(
    "Rizwan",
    86,
    "riz1ash786@gmail.com",
    "riz1ash786"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// gets engineer role from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Rizwan",
    86,
    "riz1ash786@gmail.com",
    "riz1ash786"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
