const db = require("./data/db.js");
const express = require("express");
const meetingRoutes = require("./routes/meetings.js");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 4567;

db.connect();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(meetingRoutes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
