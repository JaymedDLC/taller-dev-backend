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

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, getUsersByHobby };
