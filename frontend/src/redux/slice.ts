import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { User, Hobby } from "../types/user";

interface InitialState {
  users: User[];
  hobbies: Hobby[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  users: [],
  hobbies: [
    { id: "1", name: "Reading" },
    { id: "2", name: "Traveling" },
    { id: "3", name: "Gardening" },
    { id: "4", name: "Cooking" },
    { id: "5", name: "Photography" },
    { id: "6", name: "Writing" },
    { id: "7", name: "Fishing" },
    { id: "8", name: "Dancing" },
    { id: "9", name: "Singing" },
    { id: "10", name: "Drawing" },
    { id: "11", name: "Painting" },
    { id: "12", name: "Yoga" },
    { id: "13", name: "Meditation" },
    { id: "14", name: "Cycling" },
    { id: "15", name: "Hiking" },
    { id: "16", name: "Running" },
    { id: "17", name: "Swimming" },
    { id: "18", name: "Knitting" },
    { id: "19", name: "Crafting" },
    { id: "20", name: "Coding" },
    { id: "21", name: "Blogging" },
    { id: "22", name: "Gaming" },
    { id: "23", name: "Bird Watching" },
    { id: "24", name: "Astrology" },
    { id: "25", name: "Stargazing" },
    { id: "26", name: "Volunteering" },
    { id: "27", name: "Puzzles" },
    { id: "28", name: "Chess" },
    { id: "29", name: "Skating" },
    { id: "30", name: "Martial Arts" },
    { id: "31", name: "Investing" },
    { id: "32", name: "Woodworking" },
    { id: "33", name: "Pottery" },
    { id: "34", name: "Surfing" },
    { id: "35", name: "Rock Climbing" },
    { id: "36", name: "Archery" },
    { id: "37", name: "Scuba Diving" },
    { id: "38", name: "Snowboarding" },
    { id: "39", name: "Baking" },
    { id: "40", name: "Origami" },
  ],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    addUser (state, action: PayloadAction<Omit<User, "id">>) {
      state.users.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setHobbies(state, action: PayloadAction<Hobby[]>) {
      state.hobbies = action.payload;
    },
    addHobbyToUser (
      state,
      action: PayloadAction<{ userId: string; hobbyId: string }>
    ) {
      const user = state.users.find((user: User) => user.id === action.payload.userId);
      if (user && !user.hobbies.includes(action.payload.hobbyId)) {
        user.hobbies.push(action.payload.hobbyId);
      }
    },
  },
});

export const {
  setLoading,
  setError,
  addUser ,
  setUsers,
  setHobbies,
  addHobbyToUser ,
} = userSlice.actions;

export default userSlice.reducer;