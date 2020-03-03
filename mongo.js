const mongoose = require("mongoose")
const { mongoAtlasPword } = require("./config");
const mongoSettings = {
  keepAlive: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: false
};


const mongo = () => {
  const mongoURI = `mongodb+srv://andrea:${mongoAtlasPword}@cluster0-ucicu.mongodb.net/test?retryWrites=true&w=majority`;
  mongoose.set("debug", true);
  mongoose.set("useFindAndModify", false);
  mongoose.Promise = Promise; // allows us to do without CALLBACKS!

  const connected = new Promise((resolve, reject) => {
    mongoose.connection.on("connected", () => {
      console.log("MONGO connected");
      resolve();
    })
  })

  mongoose.connect(mongoURI, mongoSettings, err => {throw err});

  return connected;
}

module.exports = mongo;

