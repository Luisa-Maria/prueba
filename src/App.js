
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const numero = Math.floor(Math.random() * (10));
  const url = 'https://rickandmortyapi.com/api/character/?page=' + numero
  const [mains, setMains] = useState([])

  useEffect(async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    console.log(responseJSON.results)
    setMains(responseJSON.results)
  }, [])

  console.log("resultado", mains)
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
     
      <div className="row">

        {mains.length <= 1 ? 'cargando...' : (

          mains.map((personaje) =>

            <div className="mb-3 col-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={personaje.image} style={{ width: '100%' }} className=" " alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body uno">
                      <blockquote class="blockquote">
                        <h5 className="card-title"><h6> <u> Nombre:</u> </h6> {personaje.name}</h5>
                        <p className="card-text"> <h6> <u> Origen:</u></h6> {personaje.origin.name}</p>
                        <p className="card-text"> <h6><u>Estado: </u> </h6> {personaje.status}</p>
                        <p className="card-text"><h6><u>Especie:</u></h6> {personaje.species}</p>
                        <p className="card-text"><h6><u>Genero: </u></h6>{personaje.gender}</p>
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

export default App;
