import { Router } from "express";
import moviesControllers from "../controller/moviesControllers.js";
import validateSchema from "../middlewares.ts/schemaValidate.js";
import { moviesSchema } from "../schema/moviesSchemas.js";

const movieRouter: Router = Router()

movieRouter.get("/teste", moviesControllers.teste)
movieRouter.post("/movies",validateSchema(moviesSchema), moviesControllers.insertMovie)
movieRouter.get("/movies", moviesControllers.getMovies)
movieRouter.put("/movies/:id", moviesControllers.setMovies)
movieRouter.delete("/movies/:id", moviesControllers.deleteMovies)

export default movieRouter;