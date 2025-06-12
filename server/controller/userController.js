const db = require("../db");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(id, email) {
    const payload = { id, email };
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "24h",
    });
}

class UserController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(`Registration error: `, errors.errors[0].msg);
                return res.status(400).json({
                    message: `Registration error: ${errors.errors[0].msg}`,
                });
            }

            const { name, email, password } = req.body;
            const candidate = await db.query(
                "SELECT * FROM users WHERE email=$1",
                [email]
            );

            if (candidate.rows[0]) {
                console.log(`user with email ${email} alredy exist`);
                return res.status(400).json({
                    message: `User with email ${email} alredy exist!`,
                });
            }

            const hashPass = bcrypt.hashSync(password, 7);

            await db.query(
                "INSERT INTO users (name, email, password) values ($1, $2, $3)",
                [name, email, hashPass]
            );

            return res.json({ message: "User registrated success!" });
        } catch (error) {
            console.log(`Registration error: ${error}`);
            return res.status(400).json({ message: "Registration error!" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await db.query("SELECT * FROM users WHERE email=$1", [
                email,
            ]);

            if (!user.rows[0]) {
                console.log(`user with email ${email} not find`);
                return res.status(400).json({
                    message: `User with email ${email} not find!`,
                });
            }

            const validPass = bcrypt.compareSync(
                password,
                user.rows[0].password
            );

            if (!validPass) {
                console.log(`password is not correct`);
                return res.status(400).json({
                    message: `Incorrect password!`,
                });
            }

            const token = generateAccessToken(
                user.rows[0].id,
                user.rows[0].email
            );

            return res.json({ token });
        } catch (error) {
            console.log(`Login error: ${error}`);
            return res.status(400).json({ message: "Login error!" });
        }
    }

    async users(req, res) {
        try {
            const users = await db.query("SELECT * FROM users");
            res.send(users.rows);
        } catch (error) {}
    }
}

module.exports = new UserController();
