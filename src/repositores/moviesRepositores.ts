import connectionDb from "../config/database.js";
import { Movies } from "../protocols/types";

async function insertMovie({name, platform, genre}:Movies) {
    connectionDb.query(`INSERT INTO movies (name, platform, genre)
    VALUES ($1, $2, $3, $4);`, [name, platform, genre])
}

async function getMovies() {
    return connectionDb.query(`SELECT * FROM movies`)
}

async function setMovies({id}) {
    return connectionDb.query(`UPDATE movies SET watched = true WHERE id = $1;`, [id])
}

async function deleteMovies({id}) {
    return connectionDb.query(`DELETE FROM movies WHERE id = $1`, [id])
}

async function getMovieById({id}) {
    return connectionDb.query(`SELECT watched FROM movies WHERE id = $1`, [id])
}

export default {
    insertMovie,
    getMovies,
    setMovies,
    deleteMovies,
    getMovieById
}