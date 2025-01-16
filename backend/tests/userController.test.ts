import { users } from "../src/models/userModel";
import { createUser } from "../src/controllers/userController";

describe("User Controller Tests", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should create a new user", () => {
    const req = {
      body: { username: "John", age: 30, hobbies: ["reading"] },
    } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(users.length).toBe(1);
    expect(users[0].username).toBe("John");
  });
});
