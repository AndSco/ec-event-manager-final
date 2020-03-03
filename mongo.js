const mongoose = require("mongoose")
const { mongoAtlasPword } = require("./config");
const mongoSettings = {
  keepAlive: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};


const mongo = () => {
  try {
    const mongoURI = `mongodb+srv://andrea:${mongoAtlasPword}@cluster0-ucicu.mongodb.net/test?retryWrites=true&w=majority`;
    mongoose.set("debug", true);
    mongoose.set("useFindAndModify", false);
    mongoose.Promise = Promise; // allows us to do without CALLBACKS!

    const connected = new Promise((resolve, reject) => {
      mongoose.connection.on("connected", () => {
        console.log("MONGO connected");
        resolve();
      });
    });
    mongoose.connect(mongoURI, mongoSettings);
    return connected;
  } catch(err) {
    console.error(err)
  }
}

module.exports = mongo;

