const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fetchUsersFromApi = require("./utils/fetchUsersFromApi");
require("dotenv").config();
const synchronizeUsers = require("./utils/synchronizeUsers");
const imageRoutes = require("./routes/image");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
    synchronizeUsers().catch((err) => console.error("Erreur lors de la synchronisation initiale:", err));
    setInterval(() => {
      synchronizeUsers().catch((err) => console.error("Erreur lors de la synchronisation périodique:", err));
    }, 60000);
  })
  .catch((error) => console.log("Connexion à MongoDB échouée :", error));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.get("/test-fetch-users", async (req, res) => {
  try {
    const users = await fetchUsersFromApi();
    res.json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
});

app.use("/images", express.static(path.join(__dirname, "../images")));
app.use("/api/images", imageRoutes);

module.exports = app;
