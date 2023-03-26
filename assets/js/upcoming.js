const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=f81fa3c12f98c8ce35ced4ac660702b1&language=es-MX";

document.addEventListener("DOMContentLoaded",()=>{
    obtnerPeliculas();
})


    const obtnerPeliculas = async () => {
        try{
        const response = await fetch (url);
        console.log(response);

        if (response.status === 200){
            const json = await response.json();

            let peliculas = "";
            json.results.forEach(pelicula => {
                peliculas += `
                <div class= "pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `
        });

            document.getElementById("contenedor").innerHTML = peliculas;

        } else if (response.status === 401){
            console.log("API key invalida")
        } else if (response.status === 404) {
            console.log("la peticion no existe")
        } else {
            console.log("surgió un problema inesperado")
        }
  
        }catch (error){
            console.log(error);
} 

} 