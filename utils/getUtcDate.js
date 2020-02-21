const getUtcDate = userDateInput => {
  let utcDateArray;
  if (userDateInput.includes(".")) {
    utcDateArray = userDateInput.split(".");
  } else if (userDateInput.includes("-")) {
    utcDateArray = userDateInput.split("-");
  }
  return new Date(
    Date.UTC(
      Number(utcDateArray[0]),
      Number(utcDateArray[1]) - 1,
      Number(utcDateArray[2]),
      0,
      0,
      0
    )
  );
};


module.exports = getUtcDate;