import { Response } from "express";
import CoureseModel from "../models/course.model";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import CourseModel from "../models/course.model";

// create cousrse

 export const createCourse = CatchAsyncError(async(data:any, res:Response)=>{
    const coures = await CoureseModel.create(data);
    res.status(201).json({
        success:true,
        coures
    })
 })

//  get all sourses --- 
export const getAllCourseService = async (res: Response) => {
    const courses = await CourseModel.find().sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      courses,
    });
  };