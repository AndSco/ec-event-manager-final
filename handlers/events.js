const Event = require("../models/Event");
const Participant = require("../models/Participant");
const cloudinary = require("cloudinary");




module.exports.createNewEvent = async (req, res, next) => {
  try {
    const eventConfigs = req.body;
    // eventConfigs.programmeImages = [{ imageUrl: "testUrl", imagePublicId: "testKey" }];
    const newEvent = await Event.create(eventConfigs);
    res.status(200).json(newEvent);
  } catch(err) {
    return next(err);
  }
}

module.exports.fetchAllEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.find();
    res.status(200).json(allEvents);
  } catch(err) {
    return next(err);
  }
}

module.exports.getEvent = async (req, res, next) => {
  try {
    const {eventId} = req.params;
    const eventToReturn = await Event
      .findById(eventId)
      .populate("participantsRegistered")
      .exec();
      
    res.status(200).json(eventToReturn);
  } catch(err) {
    return next(err);
  }
}


module.exports.deleteEvent = async (req, res, next) => {
  try {
    await Participant.deleteMany({ eventIdRegisteredFor: req.params.eventId });
    await Event.deleteOne({_id: req.params.eventId});
    res.status(200).json({message: "users and event deleted"});
  } catch(err) {
    return next(err);
  }
}


module.exports.editEvent = async (req, res, next) => {
  try {
    const query = { _id: req.params.eventId };
    const editedEvent = await Event.findOneAndUpdate(query, req.body);
    return res.status(200).json(editedEvent);
  } catch(err) {
    return next(err);
  }
}


module.exports.uploadEventProgramme = async (req, res, next) => {
  try {
    const programmeUrl = req.file.secure_url;
    const public_id = req.file.public_id.split("/")[1];

    res.status(200).json({
      programmeUrl,
      public_id
    });
  } catch (err) {
    return next(err);
  }
};


module.exports.deleteProgrammeOnCloudinary = async (req, res, next) => {
  try {
    const idOfPdf = req.params.pdfPublicId;
    cloudinary.v2.uploader.destroy(idOfPdf, {resource_type: "raw"}, (error, result) => {
      console.log("Deleted pdf?", result);
      res.status(200).json({
        id: idOfPdf,
        result
      })
    });
  } catch(err) {
    return next(err);
  }
}