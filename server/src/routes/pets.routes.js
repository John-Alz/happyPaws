import { Router } from "express";
import { deletePet, getPet, getPets, getPetsOwner, postPet, putPet } from "../controllers/pet.controller.js";
import { isOwner, verifyToken } from "../middlewares/authJwt.js";



const petRouter = Router();

petRouter.get('/pets', getPets)
petRouter.post('/pets', [verifyToken, isOwner], postPet)
petRouter.get('/pet/:id', getPet)
petRouter.get('/pets/:owner', getPetsOwner)
petRouter.put('/pet/:id', [verifyToken, isOwner], putPet)
petRouter.delete('/pet/:id', [verifyToken, isOwner], deletePet)


export default petRouter;