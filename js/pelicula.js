import { getPeliculas } from "./firebase.js";

const getPeliculass = async () => {
    const peliculas = await getPeliculas();
    let html = `<br/><h1>Cartelera</h1><br/>`;  
    peliculas.forEach( doc => {
        let pelicula = doc.data();
        html += `
            <div class="pelicula">
                <h2>${pelicula.Titulo}</h2>
                <p>${pelicula.Sinopsis}</p>
                <br/>
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-titulo">Título Original:</div>
                        <div class="celda">${pelicula.Titulo}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Estreno:</div>
                        <div class="celda">${pelicula.Estreno}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Género:</div>
                        <div class="celda">${pelicula.Genero}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Director:</div>
                        <div class="celda">${pelicula.Director}</div>
                    </div>
                    <div class="fila">
                        <div class="celda-titulo">Reparto:</div>
                        <div class="celda">${pelicula.Reparto}</div>
                    </div>
                </div>
            </div>
            <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"><br/><br/>`


    });
    document.getElementById('contenido-interno').innerHTML = html;
}

getPeliculass()