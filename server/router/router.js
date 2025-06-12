const Router = require("express");
const router = new Router();
const userController = require("../controller/userController");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/registration",
    [
        check("name", "Name not be epmty!").notEmpty(),
        check("email", "Incorrect email format!").isEmail(),
        check(
            "password",
            "Password must be longer than 4 and less than 15"
        ).isLength({ min: 4, max: 10 }),
    ],
    userController.registration
);
router.post("/login", userController.login);
router.get("/users", authMiddleware, userController.users);

module.exports = router;
