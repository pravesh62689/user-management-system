import { Request, Response,RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';


const users: { id: string; username: string; age: number; hobbies: string[] }[] = [];

export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).json(users);
};

export const createUser = (req: Request, res: Response) => {
    const { username, age, hobbies } = req.body;
    const id = uuidv4();
    const newUser = { id, username, age, hobbies };
    users.push(newUser);
    res.status(201).json({ message: 'User created', user: newUser });
};

export const updateUser: RequestHandler = async (req, res) => {
    const { userId } = req.params;
    const { username, age, hobbies } = req.body;

      const user = users.find(u => u.id === userId.trim());

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    if (username) user.username = username;
    if (age) user.age = age;
    if (hobbies) user.hobbies = hobbies;

    res.status(200).json({ message: 'User updated', user });
    return;
};


export const deleteUser: RequestHandler = (req: Request, res: Response) => {
    const { userId } = req.params;

       const userIndex = users.findIndex(u => u.id === userId.trim());

    if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    users.splice(userIndex, 1);

    res.status(204).send();
};
