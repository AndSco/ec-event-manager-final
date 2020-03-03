const express = require("express");
const router = express.Router();
const {
  createNewEvent,
  fetchAllEvents,
  getEvent,
  deleteEvent,
  editEvent,
  uploadEventProgramme,
  deleteProgrammeOnCloudinary
} = require("../handlers/events");

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const { cloudName, cloudinaryKey, cloudinarySecret } = require("../config");

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudinaryKey,
  api_secret: cloudinarySecret
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "eventManager",
  allowedFormats: ["pdf"],
});

const upload = multer({ storage: storage });


// Prefixed with /api/events
router.get("/", fetchAllEvents);
router.get("/:eventId", getEvent);
router.post("/programmeUpload", upload.single("file"), uploadEventProgramme);
router.post("/", createNewEvent);
router.delete("/:eventId", deleteEvent);
router.delete("/programmes/eventManager/:pdfPublicId", deleteProgrammeOnCloudinary);
router.patch("/:eventId", editEvent);

module.exports = router;