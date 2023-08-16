require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const authRouter = require("./routes/authRouter");
const storyRouter = require("./routes/storyRouter");
const auth = require("./middleware/auth");
const allRouter= require("./routes/allRouter")
const cors =require("cors")
// const rateLimit = require("express-rate-limit");
//app.set("trust proxy", 1);

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//middleware
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(cors());
// app.use(rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100,// limit each IP to 100 requests per `window` (here, per 15 min)limits number of request each ip address can make 
// }))


//routes
app.use("/api/v1", authRouter);
app.use("/api/v1/story", auth, storyRouter);
app.use("/api/v1/all", auth, allRouter);


//db connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on ${port}.....`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

app.use((req, res) => {
  res.status(404).json({ msg: "Resource Not Found " });
});
