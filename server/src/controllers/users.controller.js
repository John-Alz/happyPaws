import User from '../models/user.model.js'

export const getUsers = async (req, res) => {
    try {
        let users = await User.find({})

        if (users.length === 0) return res.status(404).json({ message: 'No hay usuarios' })

        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getUser = async (req, res) => {
    let { id } = req.params;
    console.log("llegue");

    try {
        let user = await User.findById(id)

        if (!user) return res.status(404).json({ message: `No hay usuarios con id ${id}` })

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserRol = async (req, res) => {
    let rol = req.params.rol
    console.log("Llegue");

    try {
        let users = await User.find({ role: rol })

        if (users.length === 0) return res.status(404).json({ message: `No hay usuarios con rol ${rol}` })

        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// export const postUser = async (req, res) => {
//     let { } = req.body;
//     try {
//         let newUser = await User
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }


export const putUser = async (req, res) => {
    let { id } = req.params;
    let body = req.body;
    try {
        let user = await User.findByIdAndUpdate(id, body);

        if (!user) return res.status(404).json({ message: `No hay usuarios con id ${id}` })

        res.json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    let id = req.params.id;

    try {
        let user = await User.findByIdAndDelete(id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.json(user)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}