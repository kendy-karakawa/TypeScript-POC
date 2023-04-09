import express, { json } from "express";
import cors from "cors";
import movieRouter from "./router/moviesRouters.js";
var app = express();
app.use(json());
app.use(cors());
app.use([movieRouter]);
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server running in port: ".concat(port)); });
