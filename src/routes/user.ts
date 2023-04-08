import { Router } from "express";
import {UserController} from "../controllers";
const routes = Router();

routes.post('/', UserController.create);
routes.put('/', UserController.update);
//put e o metodo http sobre atualizaçao
export default routes;