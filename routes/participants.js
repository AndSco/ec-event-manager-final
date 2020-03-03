const express = require("express");
const router = express.Router();
const {
  createParticipant,
  updateParticipantRegistration,
  throwAwayParticipant,
  updateParticipantsInBulk
} = require("../handlers/participants");

// prefixed with /api/participants
router.post("/:eventId", createParticipant);
router.patch("/:participantId", updateParticipantRegistration);
router.put("/bulkUpdate", updateParticipantsInBulk);
router.delete("/:participantId", throwAwayParticipant);

module.exports = router;