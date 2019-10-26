import { Router } from 'express';
import Student from './app/models/Students';

const routes = new Router();

routes.get('/', async (req, res) => {
  const student = await Student.create({
    name: 'Arthur Freitas',
    email: 'arthur@gmail.com',
    age: 20,
    weigth: 80,
    height: 1.85,
  });
  res.json(student);
});

export default routes;
