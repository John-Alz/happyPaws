import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/user.model.js"


export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        console.log(token);

        if (!token) return res.status(403).json({ message: "No token provided" })

        const decoded = jwt.verify(token, TOKEN_SECRET)
        req.userId = decoded.id

        const user = await User.findById(req.userId, { password: 0 });

        if (!user) return res.status(403).json({ message: "no user found" })

        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" })
    }

}


export const isOwner = async (req, res, next) => {
    const user = await User.findById(req.userId);
    console.log(user.role);

    if (user.role === "Duenio" || user.role === "Administrador") {
        next();
        return;
    }

    return res.status(403).json({ message: "No tienes el rol duenio o administrador" })

}

export const isWalker = async (req, res, next) => {
    const user = await User.findById(req.userId);
    console.log(user.role);

    if (user.role === "Paseador" || user.role === "Administrador") {
        next();
        return;
    }

    return res.status(403).json({ message: "No tienes el rol paseador o administrador" })

}

