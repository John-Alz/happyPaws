import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function Prueba() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([])

    async function login(user) {
        await axios.post("http://localhost:3000/api/login", user, { withCredentials: true })
    }

    async function walkers() {
        let walkers = await axios.get("http://localhost:3000/api/walks", { withCredentials: true })
        setData(walkers.data)
    }

    useEffect(() => {
        walkers()
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name + " ==> " + e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const logout = async () => {
        await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true });
        console.log("Sesión cerrada");
    }


    const handleSubmitLogout = () => {
        logout()
        setUser[{ email: '', password: '' }]
        setData([])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
        console.log(user);
        console.log(data);


    }

    console.log(user);
    console.log(data.message);

    return (
        <>
            <div>
                <button onClick={handleSubmitLogout}>Cerrar sesion</button>
            </div>
            <form className="w-[30%] m-auto">
                <div className="flex flex-col">
                    <label>Email</label>
                    <input onChange={handleChange} type="text" name="email" placeholder="Escribe tu email"
                        className="border border-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Contrasena</label>
                    <input onChange={handleChange} type="password" name="password" placeholder="Escribe tu contraseba"
                        className="border border-black"
                    />
                </div>
                <button onClick={handleSubmit} className="bg-black text-white p-2 px-4">Enviar</button>
            </form>

            <div>
                {
                    data.map((item, i) => {
                        return (
                            <div>
                                <p>{item.newsWalk}</p>
                                <p>{item.message}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Prueba