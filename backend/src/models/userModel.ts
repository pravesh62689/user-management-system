import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  age: number;
  hobbies: string[];
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  hobbies: { type: [String], default: ["cricket","football"] },
});

export default mongoose.model<User>("User ", userSchema);