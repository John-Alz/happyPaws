import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


export const register = async (req, res) => {
    let { name, photo, email, password, role, paseadorInfo, duenioInfo, adminInfo } = req.body;

    console.log(name, email, password, role);

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        if (role === 'Paseador') {
            if (!paseadorInfo) return res.status(400).json({ message: 'Faltan datos del paseador' });
            duenioInfo = null;
            adminInfo = null;
        }

        if (role === 'Duenio') {
            if (!duenioInfo) return res.status(400).json({ message: 'Faltan datos del dueño' });
            paseadorInfo = null;
            adminInfo = null;
        }

        if (role === 'Administrador' && !adminInfo) {
            return res.status(400).json({ message: 'Faltan datos del administrador' });
        }


        const newUser = new User({
            name,
            photo,
            email,
            password: passwordHash,
            role,
            paseadorInfo,
            duenioInfo,
            adminInfo
        });

        const userSaved = await newUser.save();

        const token = jwt.sign({ id: userSaved._id }, TOKEN_SECRET, {
            expiresIn: 86400 //24hrs
        })

        res.cookie('token', token)

        res.json({
            id: userSaved._id,
            name: userSaved.name,
            photo: userSaved.photo,
            email: userSaved.email,
            role: userSaved.role,
            paseadorInfo: userSaved.paseadorInfo,
            duenioInfo: userSaved.duenioInfo,
            adminInfo: userSaved.adminInfo,
            token,
        });

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}


export const login = async (req, res) => {
    let { email, password } = req.body;
    console.log(email, password);


    try {

        const userFound = await User.findOne({ email })
        console.log(userFound);


        if (!userFound) {
            return res.status(400).json({ message: "User Not found" })
        };

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" })
        }


        const token = jwt.sign({ id: userFound._id }, TOKEN_SECRET, {
            expiresIn: 86400
        })

        res.cookie('token', token)

        res.json({
            id: userFound._id,
            name: userFound.name,
            photo: userFound.photo,
            email: userFound.email,
            role: userFound.role,
            paseadorInfo: userFound.paseadorInfo,
            duenioInfo: userFound.duenioInfo,
            adminInfo: userFound.adminInfo,
            token
        });

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200)
}

export const profile = async (req, res) => {

    try {
        let user = await User.findById(req.userId)
        res.json(user)
    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }


}