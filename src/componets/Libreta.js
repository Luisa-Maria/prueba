import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export const Libreta = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [contacts, setContacts] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        setContacts(JSON.parse(localStorage.getItem('contacts')) || []);
    }, [])

    const submitForm = (data) => {
        if (!edit && edit !== 0) {
            const newList = contacts;
            newList.push(data);
            setContacts(newList);
            localStorage.setItem('contacts', JSON.stringify(newList))
            reset();
        } else {
            const newList = contacts;
            newList.splice(edit, 1)
            newList.push(data);
            localStorage.setItem('contacts', JSON.stringify(newList))
            reset({});
            setEdit(false);
        }
    }
    
    const editValue = (data, index) => {
        reset(data);
        setEdit(index);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="row g-3">
            <div className=" col-6">

                <div className="">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} />
                </div>
                <div className="">
                    <label className="form-label">Telefono</label>
                    <input type="number" className="form-control" {...register("phone", { required: true })} />
                </div>
                <div className="">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" {...register("email", { required: true })} />
                </div>
                <br />


                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </div>

            <div className=" col-6">
                <h5>List of Contacs</h5>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td><button type="button" class="btn btn-primary" onClick={() => editValue(contact, index)}>Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </form>
    )


}