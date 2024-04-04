const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
// ENV CONFIG
require("dotenv").config();

const router = require("./routes/route-generate");

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       const origins = String(process.env.CORS_ORIGIN).split(",");
//       if (!origin || origins.includes(String(origin))) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed."), false);
//       }
//     },
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

try {
  if (app.listen(PORT)) {
    console.log(`SERVER IS WORKING ON PORT ${PORT}`);
  }
} catch (error) {
  console.error(error);
}
