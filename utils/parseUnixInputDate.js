const parseUnixInputDate  = userDateInput => {
  const dateFromUnix = new Date(Number(userDateInput));
  let utc = dateFromUnix.toUTCString();
  let unix = dateFromUnix.getTime();
  return { unix, utc };
}

module.exports = parseUnixInputDate;