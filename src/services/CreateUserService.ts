import { AxiosResponse } from 'axios';
import User from '../models/User';
import { postUser } from '../apiServices/usersApiServices';

interface Request {
  email: string;
  name: string;
}

class CreateUserService {
  public async execute({ email, name }: Request): Promise<AxiosResponse<User>> {
    const userModel = new User(name, email);
    const user = await postUser(userModel);
    return user;
  }
}

export default CreateUserService;
