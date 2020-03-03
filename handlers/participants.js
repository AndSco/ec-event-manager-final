const Participant = require("../models/Participant");
const Event = require("../models/Event");

module.exports.createParticipant = async (req, res, next) => {
  try {
    const participantConfigs = req.body;
    const eventId = req.params.eventId;
    participantConfigs.eventIdRegisteredFor = eventId;
    const newParticipant = await Participant.create(participantConfigs);
    const eventRegisteredFor = await Event.findById(eventId);
    await eventRegisteredFor.participantsRegistered.push(newParticipant);
    await eventRegisteredFor.save();
    res.status(200).json(newParticipant);
  } catch(err) {
    return next(err);
  }
}


module.exports.updateParticipantRegistration = async (req, res, next) => {
  try {
    if (req.body.actionToPerform === "accept") {
      const participantToTarget = await Participant.updateOne(
        { _id: req.params.participantId },
        { registrationStatus: "confirmed" }
      );
      res.status(200).json(participantToTarget);
    }
    if (req.body.actionToPerform === "reject") {
      const participantToTarget = await Participant.updateOne(
        { _id: req.params.participantId },
        { registrationStatus: "rejected" }
      );
      res.status(200).json(participantToTarget);
    }
    if (req.body.actionToPerform === "spam") {
      const participantToTarget = await Participant.updateOne(
        { _id: req.params.participantId },
        { registrationStatus: "spam" }
      );
      res.status(200).json(participantToTarget);
    }
  } catch(err) {
    return next(err);
  }
}

module.exports.updateParticipantsInBulk = async (req, res, next) => {
  try {
    if (req.body.actionToPerform === "accept") {
      const participantsToTarget = await Participant.updateMany(
        { _id: { $in: req.body.participantsIds } },
        { registrationStatus: "confirmed" }
      );
      res.status(200).json("test");
    }

    if (req.body.actionToPerform === "reject") {
      const participantsToTarget = await Participant.updateMany(
        { _id: { $in: req.body.participantsIds } },
        { registrationStatus: "rejected" }
      );
      res.status(200).json("test");
    }

    if (req.body.actionToPerform === "spam") {
      const participantsToTarget = await Participant.updateMany(
        { _id: { $in: req.body.participantsIds } },
        { registrationStatus: "spam" }
      );
      res.status(200).json("test");
    }    
    
  } catch(err) {
    return next(err);
  }
}


module.exports.throwAwayParticipant = async (req, res, next) => {
  try {
    const participantToDelete = await Participant.findById(req.params.participantId);
    const eventId = participantToDelete.eventIdRegisteredFor;
    const eventToUpdate = await Event.findById(eventId);
    //TO DELETE PARTICIPANT FROM EVENT DOCUMENT
    await eventToUpdate.participantsRegistered.pull({_id: req.params.participantId});
    await eventToUpdate.save();
    await Participant.deleteOne({_id: req.params.participantId});
    res.status(200).json({message: "participant deleted!"});
  } catch(err) {
    return next(err);
  }
}