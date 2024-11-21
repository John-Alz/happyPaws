import Pet from '../models/pet.model.js'

export const getPets = async (req, res) => {
    try {
        let pets = await Pet.find({}).populate('owner')

        res.json(pets)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}


export const postPet = async (req, res) => {
    let { petName, petAge, petBreed, petGender, petRecomendations, owner } = req.body;
    console.log(petName, petAge, petBreed, petGender, petRecomendations, owner);


    try {

        let newPet = new Pet({
            petName,
            petAge,
            petBreed,
            petGender,
            petRecomendations,
            owner
        });
        await newPet.save();

        res.json({ newPet })

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}

export const getPet = async (req, res) => {
    let id = req.params.id
    try {
        let pet = await Pet.findById(id).populate('owner')

        res.json(pet)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}

export const getPetsOwner = async (req, res) => {
    let owner = req.params.owner
    try {
        let pet = await Pet.find({ owner: owner })

        res.json(pet)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}


export const putPet = async (req, res) => {
    let id = req.params.id;
    let body = req.body;

    try {
        let pet = await Pet.findByIdAndUpdate(id, body)

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" })
        }

        res.json(pet)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}

export const deletePet = async (req, res) => {
    let id = req.params.id;

    try {
        let pet = await Pet.findByIdAndDelete(id)

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" })
        }

        res.json(pet)

    } catch (error) {
        res.status(500), res.json({ message: error.message })
    }
}