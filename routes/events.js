const express = require("express");
const router = express.Router();
const {
  createNewEvent,
  fetchAllEvents,
  getEvent,
  deleteEvent,
  editEvent,
  uploadEventProgramme,
  deleteProgrammeOnCloudinary,
  testDeleteProgrammeOnCloudinary
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
  allowedFormats: ["png", "jpg", "JPG", "PNG", "jpeg"]
});

const upload = multer({ storage: storage });


// Prefixed with /api/events
router.get("/", fetchAllEvents);
router.get("/:eventId", getEvent);
router.post("/programmeUpload", upload.single("file"), uploadEventProgramme);
router.post("/", createNewEvent);
router.delete("/:eventId", deleteEvent);
// router.delete("/programmes/:public_id", testDeleteProgrammeOnCloudinary);
router.patch("/:eventId", editEvent);

module.exports = router;