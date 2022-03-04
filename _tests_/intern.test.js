// using Intern constructor
const Intern = require("../lib/intern");

// creates new intern object
test("create intern object", () => {
  const intern = new Intern("Rizwan", 86, "riz1ash786@gmail.com", "UOB");

  expect(intern.school).toEqual(expect.any(String));
});

// gets intern school from getSchool()
test("gets intern school", () => {
  const intern = new Intern("Rizwan", 86, "riz1ash786@gmail.com", "UOB");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// gets intern role from getRole()
test("gets role of intern", () => {
  const intern = new Intern("Rizwan", 86, "riz1ash786@gmail.com.com", "UOB");

  expect(intern.getRole()).toEqual("Intern");
});
