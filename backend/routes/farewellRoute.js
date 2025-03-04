const express = require("express");
const checkForAuthenticationCookie = require("../middleware/authMiddleware");
const { getAllFarewell, getFarewellById, handleAddFarewell, handleUpdateFarewell, handleDeleteFarewell } = require("../controllers/farewellController");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const upload = require("../config/cloudinaryConfig");
const router = express.Router();

router.get("/farewells", getAllFarewell);
router.get("/farewells/:id", getFarewellById);
router.post(
  "/farewells/add-farewell",
  checkForAuthenticationCookie("token"),
  authorizeRoles(["PIC", "Volunteer"]),
  upload.fields([
    { name: "coverImageURL", maxCount: 1 },
    { name: "photos", maxCount: 2 },
    { name: "videos", maxCount: 2 },
  ]),
  handleAddFarewell
);
router.put(
  "/farewells/:id",
  checkForAuthenticationCookie("token"),
  authorizeRoles(["PIC", "Volunteer"]),
  upload.fields([
    { name: "coverImageURL", maxCount: 1 },
    { name: "photos", maxCount: 2 },
    { name: "videos", maxCount: 2 },
  ]),
  handleUpdateFarewell
);
router.delete("/farewell/:id", handleDeleteFarewell);

module.exports = router;
