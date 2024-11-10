import { Router } from "express";
import { getUser, getUserRol, getUsers } from "../controllers/users.controller.js";


const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.get('/user/:id', getUser);
usersRouter.get('/users/:rol', getUserRol);

export default usersRouter;