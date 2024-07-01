const router = require("express").Router();

router.get("/ping", (req, res) => {
    res.send("pong");
    res.json({ Response: "pong"})
});

module.exports = router;
