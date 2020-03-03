const mongoose = require("mongoose");
const Event = require("./Event");

const ParticipantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  mobile: {
    type: String
  },
  idCardNumber: {
    type: String
  }, 
  designation: {
    type: String
  },
  organisation: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  registrationStatus: {
    type: String,
    default: "pending"
  },
  eventIdRegisteredFor: {
    type: String,
  }
});


const Participant = mongoose.model("Participant", ParticipantSchema);

module.exports = Participant;
