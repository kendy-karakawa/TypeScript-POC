import { Router } from "express";
import moviesControllers from "../controller/moviesControllers.js";
var movieRouter = Router();
movieRouter.get("/teste", moviesControllers.teste);
movieRouter.post("/movies", moviesControllers.insertMovie);
movieRouter.get("/movies", moviesControllers.getMovies);
movieRouter.put("/movies", moviesControllers.setMovies);
movieRouter.delete("/movies", moviesControllers.deleteMovies);
export default movieRouter;
