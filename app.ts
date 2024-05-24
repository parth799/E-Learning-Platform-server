import { Request, Response, NextFunction } from "express";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import { rateLimit } from 'express-rate-limit'

require("dotenv").config();

export const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials:true,
  })
);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})

app.use("/api/v1", userRouter);

app.use("/api/v1", courseRouter);

app.use("/api/v1", orderRouter);

app.use("/api/v1", notificationRouter);

app.use("/api/v1", analyticsRouter);

app.use("/api/v1", layoutRouter);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
app.use(limiter);
app.use(ErrorMiddleware);
