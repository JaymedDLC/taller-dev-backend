import { Router, Request, Response } from "express";
import { getUsersByHobby, readUsers } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  const users = await getUsersByHobby(hobby);
  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function UserExists(request: Request, response: Response) {
  const userId = Number(request.query.id);
  const exists = await userExists(userId);
  response.status(200).json({
    message: "Success.",
    exists: exists,
  });
}

async function TeamExperience(request: Request, response: Response) {
  const ids = (request.query.ids as string).split(",").map(Number);
  const totalExperience = await getTeamExperience(ids);
  response.status(200).json({
    message: "Success.",
    totalExperience: totalExperience,
  });
}

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;
  const users = await getUsersByFaction(faction);
  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function AddUser(request: Request, response: Response) {
  const newUser = request.body;
  const user = await addUser(newUser);
  response.status(201).json({
    message: "User created successfully.",
    user: user,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby); //ruta1
userRoutes.get("/exists", UserExists); // ruta2
userRoutes.get("/team-experience", TeamExperience); // ruta3
userRoutes.get("/by-faction", GetUsersByFaction); // ruta4
userRoutes.post("/", AddUser); // ruta5

// EXPORT ROUTES
export default userRoutes;
