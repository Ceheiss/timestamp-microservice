const parseRegularInputDate = (userDateInput, getUtcDate) => {
  const utcDate = getUtcDate(userDateInput);
  let utc = utcDate.toUTCString();
  let unix = utcDate.getTime();
  return { unix, utc };
}

module.exports = parseRegularInputDate;