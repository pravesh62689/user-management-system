import { Request, Response } from "express";
import User from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createUser  = async (req: Request, res: Response) => {
  try {
    const { username, age, hobbies } = req.body;
    const newUser  = new User({ username, age, hobbies });
    await newUser .save();
    res.status(201).json(newUser );
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

export const updateUser  = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { username, age, hobbies } = req.body;
  try {
    const updatedUser  = await User.findByIdAndUpdate(
      userId,
      { username, age, hobbies },
      { new: true }
    );
    if (!updatedUser ) {
      return res.status(404).json({ message: "User  not found" });
    }
    res.status(200).json(updatedUser );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser  = async (req: Request, res: Response) => {
  const  { userId } = req.params;
  try {
    const deletedUser   = await User.findByIdAndDelete(userId);
    if (!deletedUser  ) {
      return res.status(404).json({ message: "User   not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};