const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/get-country", async (req, res) => {
  try {
    const response = await axios.get("https://api.first.org/data/v1/countries");
    res.json({ success: true, result: Object.values(response.data.data) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
