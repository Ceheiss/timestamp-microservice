const handleUserInput = require("./handleUserInput");
const sinon = require("sinon");

it("should return an error object if input is invalid", () => {
  let userDateInput = "pinneaplepizza";
  let userInput = new Date(userDateInput);
  const result = handleUserInput(userInput, userDateInput);
  const expected = { error: "Invalid Date" };
  expect(result).toEqual(expected);
});

it("should call parseUnixInputDate if userDateInoput is unix", () => {
  const userDateInput = "1441065600000";
  const userInput = new Date(userDateInput);
  const parseUnixInputDate = sinon.stub();
  handleUserInput(userInput, userDateInput, parseUnixInputDate);
  expect(parseUnixInputDate.calledOnce).toBe(true);
});

it("should call parseRegularInputDate if userDateInoput is a regular date", () => {
  const userDateInput = "2014.02.05";
  const userInput = new Date(userDateInput);
  const parseRegularInputDate = sinon.stub();
  const getUtcDate = sinon.stub();
  handleUserInput(
    userInput,
    userDateInput,
    () => {},
    parseRegularInputDate,
    getUtcDate
  );
  expect(parseRegularInputDate.calledOnce).toBe(true);
});
