const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://carrynong:0639042389zx@nodeexpressprojects.ddkhve9.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
