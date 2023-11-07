const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose
    .connect(process.env.MONGO_CONFIG, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Mongodb connected....");
    })
    .catch((err) => console.log(err.message));
    
} catch (error) {
  console.log("db connection unsuccessful");
}
