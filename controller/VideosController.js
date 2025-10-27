const { videoPool } = require("../data/mockData");

const index = (req, res) => {
  try {
    const randomVideos = [...videoPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);

    res.status(200).json({
      success: true,
      count: randomVideos.length,
      data: randomVideos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Errore nel recupero dei video",
    });
  }
};

const show = (req, res) => {
  try {
    const videoId = parseInt(req.params.id);
    const video = videoPool.find((v) => v.id === videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        error: "Video non trovato",
      });
    }
    res.status(200).json({
      success: true,
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Errore nel recuperare il video",
    });
  }
};

module.exports = {
  index,
  show,
};
