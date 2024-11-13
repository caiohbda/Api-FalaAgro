import { User } from "../models/user";

export const findUserByUsernameAndPassword = (
  username: string,
  password: string,
  users: User[]
): User | undefined => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};
