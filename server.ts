import { v2 as cloudinary } from "cloudinary";
import { app } from "./app";
import connectDB from "./utils/db";
import http from "http";
import { initSocketServer } from "./socketServer";
const server = http.createServer(app);

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

server.listen(process.env.PORT, () => {
  console.log(`server is connected with port ${process.env.Port}`);
  connectDB();
});
