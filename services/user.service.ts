import { Response } from "express";
import userModel from "../models/user.model";

// get user by id
export const getUserById = async (id: string, res: Response) => {
  const user = await userModel.findOne({ _id: id });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(201).json({
    success: true,
    user,
  });
};

// get all users

export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    users,
  });
};

// update user role

export const updateUserRoleService = async (res: Response,id:string,role:string) => {
  const user = await userModel.findByIdAndUpdate(id, {role},{new:true})
  res.status(201).json({
    success: true,
    user,
  });
};
