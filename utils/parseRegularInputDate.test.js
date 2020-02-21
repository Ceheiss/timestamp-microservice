const parseRegularInputDate  = require("./parseRegularInputDate");
const getUtcDate = require("./getUtcDate");

it("should return an object with date information when provided a date string", () => {
  const result = parseRegularInputDate("2015-01-01",getUtcDate);
  const expected = {
    unix: 1420070400000,
    utc: "Thu, 01 Jan 2015 00:00:00 GMT"
  }
  expect(result).toEqual(expected)
})