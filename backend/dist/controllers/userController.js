"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const uuid_1 = require("uuid");
// In-memory user storage
const users = [];
// Get all users
const getAllUsers = (req, res) => {
    return res.status(200).json(users);
};
exports.getAllUsers = getAllUsers;
// Create a new user
const createUser = (req, res) => {
    const { username, age, hobbies } = req.body;
    const id = (0, uuid_1.v4)();
    const newUser = { id, username, age, hobbies };
    users.push(newUser);
    return res.status(201).json({ message: 'User created', user: newUser });
};
exports.createUser = createUser;
// Update an existing user
const updateUser = (req, res) => {
    const { userId } = req.params;
    const { username, age, hobbies } = req.body;
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.username = username || user.username;
    user.age = age || user.age;
    user.hobbies = hobbies || user.hobbies;
    return res.status(200).json({ message: 'User updated', user });
};
exports.updateUser = updateUser;
// Delete a user
const deleteUser = (req, res) => {
    const { userId } = req.params;
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    return res.status(204).send();
};
exports.deleteUser = deleteUser;
