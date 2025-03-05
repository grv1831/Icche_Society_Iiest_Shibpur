const express = require("express");
const { getAllPhotosVideos, getAllPhotos, getPhotoById, getAllVideos, getVideoById } = require("../controllers/galleryController");
const router = express.Router();

router.get("/", getAllPhotosVideos);
router.get("/photos", getAllPhotos);
router.get("/photos/:id", getPhotoById);
router.get("/videos", getAllVideos);
router.get("/videos/:id", getVideoById);

module.exports = router;
