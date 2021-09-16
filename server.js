const express = require("express");
const cors = require("cors");
const path = require("path");
// const expressLogger = require("express-bunyan-logger");
const routes = require("./routes");
require("./db");
const app = express();
// app.use(
//   expressLogger({
//     excludes: [
//       "headers",
//       "req",
//       "user-agent",
//       "short-body",
//       "http-version",
//       "req-headers",
//       "res-headers",
//       "body",
//       "res",
//     ], // remove extra details from log
//   })
// );
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

//========================================================================================================================
// catch 404 and forward to error handler
app.all("*", (req, res, next) => {
  next({
    message: `can't find ${req.originalUrl} on this server.`,
    status: 404,
  });
});

// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
  // log.error(err);
  res.status(err.status || 500).send({
    success: err.success || false,
    message: err.message || "Something went wrong",
    error: err,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log("Express server listening on http://localhost:%d", PORT)
);
// log.info(
//   "Express server listening on http://localhost:%d",
//   server.address().port
// );
