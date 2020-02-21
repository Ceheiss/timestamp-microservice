const handleUserInput = (
  userInput,
  userDateInput,
  parseUnixInputDate,
  parseRegularInputDate,
  getUtcDate
) => {
  if (
    userInput.toGMTString() === "Invalid Date" ||
    !(userDateInput.includes(".") || userDateInput.includes("-"))
  ) {
    const numberUserInput = new Date(Number(userDateInput));
    if (numberUserInput.toGMTString() === "Invalid Date") {
      return { error: "Invalid Date" };
    } else {
      return parseUnixInputDate(numberUserInput);
    }
  } else if (userDateInput.includes(".") || userDateInput.includes("-")) {
    return parseRegularInputDate(userDateInput, getUtcDate);
  }
};

module.exports = handleUserInput;
