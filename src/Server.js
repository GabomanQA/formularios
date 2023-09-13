const app = require("./app");
const { config } = require("dotenv");
const http = require("http");

config();

const PORT = process.env.PORT;

const server = http.createServer({}, app);

server.listen(PORT, () => {

  console.log("Server started");
});