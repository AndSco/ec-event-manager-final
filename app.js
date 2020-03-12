const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/events");
const participantRoutes = require("./routes/participants");
const adminRoutes = require("./routes/admin");
const port = process.env.PORT || 8081;
const mongo = require("./mongo");
const path = require("path"); // To serve both frontend and backend


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
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Ooops, something went wrong!"
    }
  });
});

const init = async () => {
  try {
    await mongo();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch(err) {
    console.error(err);
  }
}

init();
