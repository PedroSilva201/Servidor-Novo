import {Router} from "express";
import {SpentsController} from "../controllers";

const routes = Router();

routes.post ('/', SpentsController.create);

export default routes;