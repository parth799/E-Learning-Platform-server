"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCourseService = exports.createCourse = void 0;
const course_model_1 = __importDefault(require("../models/course.model"));
const catchAsyncError_1 = require("../middleware/catchAsyncError");
const course_model_2 = __importDefault(require("../models/course.model"));
// create cousrse
exports.createCourse = (0, catchAsyncError_1.CatchAsyncError)(async (data, res) => {
    const coures = await course_model_1.default.create(data);
    res.status(201).json({
        success: true,
        coures
    });
});
//  get all sourses --- 
const getAllCourseService = async (res) => {
    const courses = await course_model_2.default.find().sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        courses,
    });
};
exports.getAllCourseService = getAllCourseService;
