const mongoose = require("mongoose");
const mongo =
  "mongodb+srv://Yatin123:yatin@cluster0.vau2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("db is connected"))
  .catch((e) => console.log("Db is not connected"));
