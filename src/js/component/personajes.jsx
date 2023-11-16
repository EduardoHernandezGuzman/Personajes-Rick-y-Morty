import React, { useEffect, useState } from "react";

const Personajes = () => {

    const [personajes , setPersonajes] = useState([]);

    function traerPersonajes() {
        fetch("https://rickandmortyapi.com/api/character")
        .then( (response)=> response.json() )
        .then( (data)=> setPersonajes(data.results) )
    };

    useEffect(() => {
    traerPersonajes();
  }, []);


    return (
        <>
            <h1>Personajes de Rick y Morty</h1>
            <div>
            { personajes.map((i)=> <p key={i.id}>{i.name}</p> ) }
            </div>
        </>
    );
};

export default Personajes