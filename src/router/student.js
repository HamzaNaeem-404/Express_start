import{Router} from "express";
import studentController from "../controller/student.js";

const HamzaRouter = new Router();

HamzaRouter.get('/yehPathHai', studentController.getAll);

export default HamzaRouter;