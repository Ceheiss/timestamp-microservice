const express = require("express");
const app = express();
const getUtcDate = require("./utils/getUtcDate");
const parseUnixInputDate = require("./utils/parseUnixInputDate");
const parseRegularInputDate = require("./utils/parseRegularInputDate");
const handleUserInput = require("./utils/handleUserInput");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/timestamp/:date_string?", (req, res) => {
  let userDateInput = req.params.date_string;
  // early return if no input provided
  if (!userDateInput) {
    const currentDate = new Date();
    let utc = currentDate.toGMTString();
    let unix = new Date(currentDate).getTime();
    res.json({ unix, utc });
  // handle if input is provided
  } else {
    let userInput = new Date(userDateInput);
    res.json(
      handleUserInput(
        userInput,
        userDateInput,
        parseUnixInputDate,
        parseRegularInputDate,
        getUtcDate
      )
    );
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});