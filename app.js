const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/events");
const participantRoutes = require("./routes/participants");
const adminRoutes = require("./routes/admin");
const port = process.env.PORT || 8081;
const mongo = require("./mongo");
const path = require("path"); // To serve both frontend and backend


const mongoose = require("mongoose");
const { mongoAtlasPword } = require("./config");
const mongoSettings = {
  keepAlive: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};

const mongoURI = `mongodb+srv://andrea:${mongoAtlasPword}@cluster0-ucicu.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.set("debug", true);
mongoose.set("useFindAndModify", false);
mongoose.Promise = Promise; // allows us to do without CALLBACKS!

mongoose.connect(mongoURI, mongoSettings, err => {
  throw err;
});




// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROUTES MIDDLEWARE
app.use("/api/events", eventRoutes);
app.use("/api/participants", participantRoutes);
app.use("/api/admin", adminRoutes);


// To serve both frontend and backend - catch ALL. Serve static assets only if in production. 
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client", "build"))); 
	app.get("*", (req, res) => {
   		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}


// ERROR HANDLER
app.use((error, req, res) => {
  console.log("ERROR HANDLER", error.message);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Ooops, something went wrong!"
    }
  });
});


app.listen(port, () => console.log(`Server started on port ${port}`));


