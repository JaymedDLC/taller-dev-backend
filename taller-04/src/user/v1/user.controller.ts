import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function getUsersByHobby(hobby: string): Promise<UserType[]> {
  const users = await readUsers();
  return users.filter(user => user.hobby === hobby);
}

async function userExists(id: number): Promise<boolean> {
  const users = await readUsers();
  return users.some(user => user.id === id);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, getUsersByHobby, userExists };
