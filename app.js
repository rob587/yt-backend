require("dotenv").config();
const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routing/VideosRouting");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/videos", videoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "YouTube Clone API",
    version: "1.0.0",
    endpoints: {
      homepage: "GET /api/videos",
      detail: "GET /api/videos/:id",
    },
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint non trovato",
  });
});
app.get("/", (req, res) => {
  console.log("ciao");
});

app.listen(PORT, () => {
  console.log(`🚀 Server avviato su http://localhost:${PORT}`);
  console.log(`📌 Environment: ${process.env.NODE_ENV}`);
  console.log(`📹 Homepage: http://localhost:${PORT}/api/videos`);
  console.log(`🎬 Dettaglio: http://localhost:${PORT}/api/videos/:id`);
});
