import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import { getUsers, getUsersById } from '../apiServices/usersApiServices';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const ret = await getUsers();
  return response.json(ret);
});

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const ret = await getUsersById(id);
  return response.json(ret);
});

usersRouter.post('/', async (request, response) => {
  const { name, email } = request.body;

  const userService = new CreateUserService();

  const user = await userService.execute({
    name,
    email,
  });
  return response.json(user);
});

usersRouter.put('/:id', async (request, response) => {
  return response.json({ ok: 'put' });
});

export default usersRouter;
