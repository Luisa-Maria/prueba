import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Rickandmorty = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [initialMains, setInitialMains] = useState([]);
  const { handleSubmit } = useForm();
  useEffect(() => {
    async function fetchData() {
      const numero = Math.floor(Math.random() * 10);
      const url = "https://rickandmortyapi.com/api/character/?page=" + numero;
      const response = await fetch(url);
      const responseJSON = await response.json();
      setCharacters(responseJSON.results);
      setInitialMains(responseJSON.results);
    }
    fetchData();
  }, []);

  const searchButton = () => {
    if (search !== "") {
      const filtrados = initialMains.filter((personaje) => {
        return personaje.name.toLowerCase().includes(search.toLowerCase());
      });

      setCharacters(filtrados);
    } else {
      // 3. Si el buscador está vacío, restauramos la lista original
      setCharacters(initialMains);
    }
  };

  return (
    <div className=" flex p-2">
      <div
        className="container-fluid "
        style={{ justifyContent: "end", marginBottom: "10px" }}
      >
        <form
          className="d-flex"
          style={{ width: "30%" }}
          onSubmit={handleSubmit(searchButton)}
        >
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="row p-3">
        {characters.length <= 1
          ? "cargando..."
          : characters.map((personaje, index) => (
              <div key={index} className="mb-3 col-4 d-flex">
                <div
                  className="card"
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="row no-gutters"
                    style={{ display: "flex", flex: "1" }}
                  >
                    <div className="col-md-6  ">
                      <img
                        src={personaje.image}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "100%",
                          display: "block",
                        }}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-6">
                      <div
                        className="card-body uno"
                        style={{ padding: "10px", height: "100%" }}
                      >
                        <blockquote className="blockquote">
                          <h5 className="card-title ">
                            <b>{personaje.name}</b>
                          </h5>
                          <hr></hr>
                          <p className="card-text">
                            {" "}
                            <b> Origen:</b> {personaje.origin.name}
                          </p>
                          <p className="card-text">
                            {" "}
                            <b>Estado: </b>
                            {personaje.status}
                          </p>
                          <p className="card-text">
                            <b>Especie:</b>
                            {personaje.species}
                          </p>
                          <p className="card-text">
                            <b>Genero: </b>
                            {personaje.gender}
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
