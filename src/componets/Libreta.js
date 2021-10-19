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
                <br/>
                <div className="">
                    <label className="form-label">Favorite</label>
                    <br/>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"{...register("fav", { required: true })} />
                </div>
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
                            <th scope="col">Favorite</th>
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
                


                                <td>{
                                    contact.fav ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>):(
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                    </svg>
                                  )
                                    }
                                </td>
                                <td><button type="button" class="btn btn-primary" onClick={() => editValue(contact, index)}>Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </form>
    )


}