const express = require("express")
const router = express.Router();
const { signUpController,
    signInController,
    logOutController,
    forgotPasswordController,
    resetPasswordController,
} = require ("../controllers/authControllers")

//post to register page
router.post("/signup", signUpController);

router.post("/signin", signInController);
router.get("/logout", logOutController);

// router for forgot password and password reset. 
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);

module.exports = router