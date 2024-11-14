import { Router } from "express";
import { getUser, getUserRol, getUsers, putUser } from "../controllers/users.controller.js";


const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.get('/user/:id', getUser);
usersRouter.get('/users/:rol', getUserRol);
usersRouter.put('/user/:id', putUser);

export default usersRouter;