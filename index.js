const startServer = require("./src/modules/express");

global.__ROOT__ = __dirname;

startServer();
