const parseUnixInputDate = require("./parseUnixInputDate");

it("should handle unix user input and return a response object with the date", () => {
  const result = parseUnixInputDate(1428624000000);
  const expected = {
    unix: 1428624000000,
    utc: "Fri, 10 Apr 2015 00:00:00 GMT"
  };
  expect(result).toEqual(expected);
});
