import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function getUsersByHobby(hobby: string): Promise<UserType[]> {
  const users = await readUsers();
  return users.filter(user => user.hobbies.includes(hobby));
}

async function userExists(id: number): Promise<boolean> {
  const users = await readUsers();
  return users.some(user => user.id === id);
}

async function getTeamExperience(team: string): Promise<number> {
  const users = await readUsers();
  return users
    .filter(user => user.team === team)
    .reduce((acc, user) => acc + user.years, 0); 
}

async function getUsersByFaction(faction: string): Promise<UserType[]> {
  const users = await readUsers();
  return users.filter(user => user.faction === faction);
}

async function addUser(newUser: UserType): Promise<UserType> {
  const users = await readUsers();
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);

  //SIMULANDO DASE DE BATOS
  fs.writeFileSync('./database.json', JSON.stringify(users, null, 2));

  return newUser;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, getUsersByHobby, userExists, getTeamExperience, getUsersByFaction, addUser };


//NO ME detect los cambios diomio