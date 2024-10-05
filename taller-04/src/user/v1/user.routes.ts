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

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby); //ruta1
userRoutes.get("/exists", UserExists); // ruta2

// EXPORT ROUTES
export default userRoutes;
