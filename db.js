const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/rando-store";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (conn) => {
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  })
  .catch((err) => console.log(err));
