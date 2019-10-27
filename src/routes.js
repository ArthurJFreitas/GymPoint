import { Router } from 'express';
import StudentsController from './app/controllers/studentsController';
import SessionsController from './app/controllers/sessionsController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/students', AuthMiddleware, StudentsController.store);
routes.put('/students', AuthMiddleware, StudentsController.update);

routes.post('/sessions', SessionsController.store);

export default routes;
