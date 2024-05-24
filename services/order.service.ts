import { Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import OrderModel from "../models/orderModel";

export const newOrder = CatchAsyncError(async(data:any,res:Response)=>{
    const order = await OrderModel.create(data);
    res.status(201).json({
        success: true,
        order,
      });
})

// get all Orders
export const getAllOrderService = async (res: Response) => {
  const orders = await OrderModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    orders,
  });
};