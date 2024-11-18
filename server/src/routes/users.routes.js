import { Router } from "express";
import { deleteUser, getUser, getUserRol, getUsers, putUser } from "../controllers/users.controller.js";


const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.get('/user/:id', getUser);
usersRouter.get('/users/:rol', getUserRol);
usersRouter.put('/user/:id', putUser);
usersRouter.delete('/user/:id', deleteUser);

export default usersRouter;