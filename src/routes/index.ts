import { Router, Request, Response } from "express";
import user from "./user"
import { UserController } from "../controllers"
import spents from "./spents";
import { authorization } from "../middlewares";
//import { authorization } from "../middlewares";

const routes = Router()

routes.post("/login", UserController.login);
routes.use("/user", user);
routes.use("/spent", authorization, spents);
//routes.use("/math", authorization, matematica);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;