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

            <div className="container my-5" style={{width: "50rem"}}>
                
                <div className="position-relative p-5 text-center text-muted fondo border border-dashed rounded-3">
                    <h1 className="text-body-emphasis">PERSONAJES DE RICK Y MORTY</h1>
                    <h5 className="col-lg-6 mx-auto" >
                        Estos 20 personajes han sido traídos desde <span><a className="p" style={{textDecoration:"none"}} href="https://rickandmortyapi.com/">ESTA API</a></span></h5>  
                        
                   
                    <br />




                    {personajes.map((i) => <div className="card tarjetas" style={{ width: "38rem" , height:"24rem" , padding:"10px" , margin:"auto" , marginTop: "18px"}}>
                        <img src={i.image} style={{width: "13rem" , margin:"auto", marginTop:"9px" }} className="card-img-top" alt={i.name} />
                        <div className="card-body">
                            <h2 className="card-text" key={i.id} style={{marginBottom:"16px"}}>{i.name}</h2>
                            <p className="card-text" key={i.id} style={{margin:"-3px"}}><b>Especie:</b> {i.species}</p>
                            <p className="card-text" key={i.id} style={{margin:"-3px"}}><b>Género:</b> {i.gender}</p>
                            <p className="card-text" key={i.id}><b>Lugar de nacimiento:</b> {i.origin.name}</p>
                        </div>
                    </div>)}
                </div>

            </div>

        </>
    );
};

export default Personajes