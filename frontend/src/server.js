// je veux créer un server nodejs
import express from "express";
const app = express();
import { createServer } from "http";
const port = 3000;
const serverHttp = createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World ! 🐱");
});



serverHttp.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});

// pour lancer le server
// node src/server.js
