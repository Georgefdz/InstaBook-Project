const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
//router.get("/", (req, res) => res.redirect("/feed")); 
//router.get("/", homeController.getIndex);
router.get("/", (req, res) => res.redirect("/feed"))
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed",  postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/about", (req, res) => res.render("about"));
router.get("/contact", (req, res) => res.render("contact"));


module.exports = router;

