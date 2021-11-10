import axios from 'axios';

export const BaseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});