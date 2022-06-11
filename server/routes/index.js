const express = require('express');
const Router = express.Router();

Router.get("/send", (req, res, next) => {
   res.send("HELLO")
   let { Io } = req;
   Io.emit('send', "Hello from page");
});

module.exports = Router;