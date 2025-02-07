// je veux créer un server nodejs
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "http";
import {WebSocketServer} from "ws";
import { Server } from "socket.io";
const app = express();
const port = 3000;
const serverHttp = createServer(app);




//server websocket
const io = new Server(serverHttp);
//Nom du fichier en cours d'exécution (server.js) 
const __filename = fileURLToPath(import.meta.url);
console.log("__filename", __filename);
//$dossier parent du répertoire en cours d'exécution (frontend/server)
const __dirname = dirname(__filename);
console.log("__dirname", __dirname);

//middleware
app.use(express.static(join(__dirname, "../dist")));

// Ecoute de l'evenement connection
io.on("connection", (socket) => {
  console.log("Un client est connecté", socket.id);
  // socket.on("message", (message) => {
  //   console.log("message", message);
    // io.emit("message", message);
  });
// });

// console.log("import.meta.url", import.meta.url);
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, '../dist', 'index.html'));
  // res.send("Hello World ! 🐱");
});





serverHttp.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});

// pour lancer le server
// node src/server.js
