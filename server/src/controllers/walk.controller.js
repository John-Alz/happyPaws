import Walk from "../models/walk.model.js"

export const getWalks = async (req, res) => {
    try {

        let walks = await Walk.find({}).populate("pet").populate("walker");

        if (walks.length === 0) return res.status(404).json({ message: "No hay paseos" })
        res.json(walks)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getWalk = async (req, res) => {
    let { id } = req.params;
    try {

        let walk = await Walk.findById(id).populate("pet").populate("walker");

        if (!walk) return res.status(404).json({ message: "No hay paseo con ese id" })

        res.json(walk)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const postWalk = async (req, res) => {
    let { dateWalk, startTimeWalk, timeWalk, newsWalk, pet, walker } = req.body;

    console.log(dateWalk, startTimeWalk, timeWalk, newsWalk, pet, walker);

    try {

        let newWalk = new Walk({
            dateWalk,
            startTimeWalk,
            timeWalk,
            newsWalk,
            pet,
            walker
        })

        let savedWalk = await newWalk.save();

        res.json(savedWalk)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const putWalk = async (req, res) => {

    let { id } = req.params;
    let body = req.body;

    try {

        let walk = await Walk.findByIdAndUpdate(id, body)

        if (!walk) return res.status(404).json({ message: "No hay paseo con ese id" })

        res.json(walk)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteWalk = async (req, res) => {
    let { id } = req.params;

    try {

        let walk = await Walk.findByIdAndDelete(id)

        if (!walk) return res.status(404).json({ message: "No hay paseo con ese id" })

        res.json(walk)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}