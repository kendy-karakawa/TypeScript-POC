import { Request, Response } from "express";
import { Movies, idType } from "../protocols/types";
import moviesService from "../service/moviesService.js";


async function teste(req: Request, res: Response) {
    res.send("ok")
}

async function insertMovie(req: Request, res: Response) {
    const {name, platform, genre} = req.body as Movies
        
    try {
        await moviesService.insertMovie({name, platform, genre})

        res.sendStatus(201)
    } catch (error) {
        res.send(error.message)
    }
    
}

async function getMovies(req: Request, res: Response) {
    
    
    try {
        const result = await moviesService.getMovies()

        res.send(result.rows)
    } catch (error) {
        res.send(error.message)
    }
    
}

async function setMovies(req: Request, res: Response) {
    const {id} = req.params as idType

    try {
        await moviesService.setMovies({id})
        res.sendStatus(200)
    } catch (error) {
        res.send(error.message)
    }
    
}


async function deleteMovies(req: Request, res: Response) {
    const {id} = req.params as idType

    try {
        await moviesService.deletetMovies({id})
        res.sendStatus(200)
    } catch (error) {
        res.send(error.message)
    }
    
}


export default {
    insertMovie,
    getMovies,
    setMovies,
    deleteMovies,
    teste
}