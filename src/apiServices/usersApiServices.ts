import { AxiosResponse } from 'axios';
import axios from './api';
import config from '../config';
import User from '../models/User';

export async function getUsers(): Promise<AxiosResponse<User[]>> {
  try {
    const response = await axios.get(`${config.baseUrl}/users`);
    if (response.status !== 200) throw new Error('Erro ao buscar usuários');
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function getUsersById(id: string): Promise<AxiosResponse<User>> {
  try {
    const response = await axios.get(`${config.baseUrl}/users/${id}`);
    if (response.status !== 200) throw new Error('Erro ao buscar usuário');
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function postUser({
  email,
  name,
}: User): Promise<AxiosResponse<User>> {
  try {
    const ret = await axios.post(`${config.baseUrl}/users`, { email, name });
    return ret;
  } catch (err) {
    console.log('err', err);
    return err;
  }
}
