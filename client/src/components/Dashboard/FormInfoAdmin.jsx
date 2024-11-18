import { useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../services/apiServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FormInfoAdmin() {

    const profile = useSelector(state => state.users.profile)
    console.log(profile);


    const [formData, setFormData] = useState({
        name: profile?.name || '',
        photo: profile?.photo || '',
        email: profile?.email || '',
        idType: profile?.adminInfo.idType || '',
        idNumber: profile?.adminInfo.idNumber || '',
        contactPhone: profile?.adminInfo.contactPhone || ''
    })

    const admin = {
        name: formData.name,
        photo: formData.photo,
        email: formData.email,
        password: profile.password,
        role: profile.role,
        adminInfo: {
            idType: formData.idType,
            idNumber: formData.idNumber,
            contactPhone: formData.contactPhone
        },
    }

    console.log(admin);

    const updateUser = async () => {
        try {
            let response = await api.put(`user/${profile._id}`, admin)
            console.log(response.status);

            if (!response.status === 200) return toast.error('No se pudo actulizar tu infirmacion');

            toast.success('Tu informacion fue actulizada');
        } catch (error) {
            console.log(error);
            toast.error('Ups, algo salio mal')
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name + " ===> " + value);

        setFormData({
            ...formData,
            [name]: value
        })
    }

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser()
        console.log(admin);

    }


    return (
        <section>
            <ToastContainer />
            <div className='w-11/12 m-auto pt-12'>
                <h2 className="text-4xl font-bold mb-11">Modifica tu informacion personal</h2>
                <form className='w-3/11 m-auto flex flex-col gap-8'>
                    <div className=" flex gap-4">
                        <div className='w-3/6 flex flex-col '>
                            <label className='font-semibold text-lg'>Nombre</label>
                            <input value={formData.name} onChange={handleChange} type='text' name='name' placeholder='Escribe tu nombre...'
                                className='border-2 py-2 px-4  text-lg placeholder:text rounded-xl'
                            />
                        </div>
                        <div className='w-3/6 flex flex-col '>
                            <label className='font-semibold text-lg'>Email</label>
                            <input value={formData.email} onChange={handleChange} type='text' name='email' placeholder='Escribe tu contrasena...'
                                className='border-2 py-2 px-4 text-lg  placeholder:text rounded-xl'
                            />
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <div className='w-3/6 flex flex-col '>
                            <label className='font-semibold text-lg'>Tipo de identificacion</label>
                            <select value={formData.idType} onChange={handleChange} name="idType" className='border-2 py-2 px-4 text-lg placeholder:text rounded-xl'>
                                <option selected disabled>Seleciona tu tipo de id</option>
                                <option>CC</option>
                                <option>TI</option>
                            </select>
                        </div>
                        <div className='w-3/6 flex flex-col '>
                            <label className='font-semibold text-lg'>Numero de identificacion</label>
                            <input value={formData.idNumber} onChange={handleChange} type='text' name='idNumber' placeholder='Escribe tu numero de identificacion...'
                                className='border-2 py-2 px-4 text-lg  placeholder:text rounded-xl'
                            />
                        </div>
                        <div className='w-3/6 flex flex-col '>
                            <label className='font-semibold text-lg'>Numero de telefono</label>
                            <input value={formData.contactPhone} onChange={handleChange} type='text' name='contactPhone' placeholder='Escribe tu contrasena...'
                                className='border-2 py-2 px-4 text-lg  placeholder:text rounded-xl'
                            />
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <div className='w-full flex flex-col '>
                            <label className='font-semibold text-lg'>Foto</label>
                            <input value={formData.photo} onChange={handleChange} type='text' name='photo' placeholder='Escribe tu contrasena...'
                                className='border-2 py-2 px-4 text-lg  placeholder:text rounded-xl'
                            />
                        </div>
                    </div>
                    <div>
                        <button className='bg-primaryColor text-white py-2 px-4 mt-2 rounded-xl' onClick={handleSubmit} >Guardar cambios</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
