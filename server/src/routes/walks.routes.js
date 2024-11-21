import { Router } from "express";
import { deleteWalk, getWalk, getWalks, postWalk, putWalk } from "../controllers/walk.controller.js";
import { isWalker, verifyToken } from "../middlewares/authJwt.js";


const walkRouter = Router();

walkRouter.get('/walks', getWalks)
walkRouter.get('/walk/:id', getWalk)
walkRouter.post('/walks', postWalk)
walkRouter.put('/walk/:id', putWalk)
walkRouter.delete('/walk/:id', deleteWalk)

export default walkRouter;