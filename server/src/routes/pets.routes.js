import { Router } from "express";
import { deletePet, getPet, getPets, getPetsOwner, postPet, putPet } from "../controllers/pet.controller.js";
import { isOwner, verifyToken } from "../middlewares/authJwt.js";



const petRouter = Router();

petRouter.get('/pets', getPets)
petRouter.post('/pets', postPet)
petRouter.get('/pet/:id', getPet)
petRouter.get('/pets/:owner', getPetsOwner)
petRouter.put('/pet/:id', putPet)
petRouter.delete('/pet/:id', deletePet)


export default petRouter;