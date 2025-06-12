const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(403).json({ message: "Authorization error!" });
        }

        const decodedData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decodedData; //чтобы в других функциях использовать данные из payload jwt в запрос добавляется новое поле user
        next();
    } catch (error) {
        console.log(`middleware error: ${error}`);
        return res.status(403).json({ message: "Authorization error!" });
    }
};
