const express = require("express");
const router = express.Router();

const { getCategoryById, createCategory, getCategory, getAllCategory } = require("../controllers/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual routers goes here
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

router.get("category/:categoryId", getCategory)
router.get("categories", getAllCategory )

module.exports = router;