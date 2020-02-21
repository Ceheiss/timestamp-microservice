const getUtcDate = require("./getUtcDate");

it("should be able to parse dates separated by dots", () =>  {
  const result =  getUtcDate("2015.04.10");
  const expected = new Date(
    Date.UTC(
      2015,
      3,
      10,
      0,
      0,
      0
    )
  )
  expect(result).toEqual(expected);
});

it("should be able to parse dates separated by hyphens", () =>  {
  const result =  getUtcDate("2015-04-10");
  const expected = new Date(
    Date.UTC(
      2015,
      3,
      10,
      0,
      0,
      0
    )
  )
  expect(result).toEqual(expected);
})