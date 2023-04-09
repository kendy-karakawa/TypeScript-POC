import  express, {json, Express} from "express";
import cors from "cors"
import movieRouter from "./router/moviesRouters.js";

const app: Express = express()
app.use(json());
app.use(cors());

app.use([movieRouter])


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));