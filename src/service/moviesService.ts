import { Movies } from "../protocols/types";
import moviesRepositores from "../repositores/moviesRepositores.js";

async function insertMovie({name, platform, genre}: Movies):Promise<void>  {
   moviesRepositores.insertMovie({name, platform, genre})
}

async function getMovies(){
    return await moviesRepositores.getMovies()
}

async function setMovies({id}):Promise<void>  {
    await moviesRepositores.setMovies({id})
}

async function deletetMovies({id}):Promise<void>  {
    await moviesRepositores.deleteMovies({id})
}

export default {
    insertMovie,
    getMovies,
    setMovies,
    deletetMovies
}