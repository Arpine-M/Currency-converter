const express = require("express");
const rateLimit = require("./node_modules/express-rate-limit/dist/index.d.cts");
const PORT = process.env.PORT || 5000;
const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Middlewares
app.use(express.json());
app.use(apiLimiter);

//Conversion
app.post("/api/convert", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
  } catch (error) {}
});

// Start the server
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
