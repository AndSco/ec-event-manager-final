const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startingTime: {
    type: String
  },
  endingTime: {
    type: String
  },
  venue: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pdfProgramme: {
    type: String
  },
  pdfProgrammePublicId: {
    type: String
  },
  videoUrl: {
    type: String
  },
  participantsRegistered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant"
    }
  ],
  urlSlug: {
    type: String
  },
  isIdRequired: {
    type: Boolean,
    default: false
  },
  isOrganisationRequired: {
    type: Boolean,
    default: false
  }
  // programmeImages: [{
  //   imageUrl: {
  //     type: String
  //   }, 
  //   imagePublicId: {
  //     type: String
  //   }
  // }]
});

// To let the post save hook whether the document is newly created or not;
EventSchema.pre("save", function(next) {
  this.wasNew = this.isNew;
  next();
});

EventSchema.pre("save", function() {
  if (this.wasNew) { 
    this.urlSlug = `/events/${this._id}`;
  }
  return;
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;