import { React, useEffect, useState } from "react";


export const Rickandmorty = () => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')
    const [initialMains, setInitialMains] = useState([])


    useEffect(() => {
        async function fetchData() {
            const numero = Math.floor(Math.random() * (10));
            const url = 'https://rickandmortyapi.com/api/character/?page=' + numero
            const response = await fetch(url)
            console.log(response.status)
            const responseJSON = await response.json()
            console.log(responseJSON.results)
            setCharacters(responseJSON.results)
            setInitialMains(responseJSON.results)
        }
        fetchData()

    }, [])

    useEffect(() => {
        if (search !== '') {
            setCharacters(characters.filter((personaje) => {
                if (personaje.name.toString().toLowerCase().includes(search.toLowerCase())) {
                    return personaje;
                }
            }));

        } else {
            setCharacters(initialMains)
        }
    }, [search])

    return (
        <div className="background">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input value={search} onChange={(event) => setSearch(event.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="row">

                {characters.length <= 1 ? 'cargando...' : (

                    characters.map((personaje, index) =>

                        <div key={index} className="mb-3 col-4">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={personaje.image} style={{ width: '100%' }} className=" " alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body uno">
                                            <blockquote class="blockquote">
                                                <h5 className="card-title"><b> Nombre:</b><div>{personaje.name}</div></h5>
                                                <p className="card-text">  <b> Origen:</b> {personaje.origin.name}</p>
                                                <p className="card-text"> <b>Estado: </b>{personaje.status}</p>
                                                <p className="card-text"><b>Especie:</b>{personaje.species}</p>
                                                <p className="card-text"><b>Genero: </b>{personaje.gender}</p>
                                            </blockquote>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )


                )

                }
            </div>
        </div>
    );
}