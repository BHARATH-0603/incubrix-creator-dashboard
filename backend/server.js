const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());
app.use(express.json());

// GET all metrics OR filter by platform
app.get("/metrics", (req, res) => {
  const { platform } = req.query;
  let result = data;

  if (platform) {
    result = data.filter(item => item.platform === platform);
  }

  res.json(result);
});

// GET summary metrics
app.get("/metrics/summary", (req, res) => {
  const { platform } = req.query;
  let result = data;

  if (platform) {
    result = data.filter(item => item.platform === platform);
  }

  const totalViews = result.reduce((sum, i) => sum + i.views, 0);
  const totalEngagement = result.reduce(
    (sum, i) => sum + i.likes + i.comments,
    0
  );
  const followersGained = result.reduce(
    (sum, i) => sum + i.followers_gained,
    0
  );

  const engagementRate =
    totalViews === 0 ? 0 : (totalEngagement / totalViews).toFixed(2);

  res.json({
    totalViews,
    engagementRate,
    followersGained
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
