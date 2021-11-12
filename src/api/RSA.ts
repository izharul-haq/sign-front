import { RSAKeyInput, RSAKeyOutput } from '~/models/RSA'
import { BaseInstance } from './base'

export const getRSAKey = async (reqBody: RSAKeyInput): Promise<RSAKeyOutput> => {
  const { data } = await BaseInstance.post<RSAKeyOutput>(
    '/sign/key/all?algo=rsa',
    reqBody
  );

  return data;
};

export const getRSASign = async (message: File, key: string): Promise<string> => {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('key', key);
  
  const { data } = await BaseInstance.post<string>(
    '/sign/file?algo=rsa',
    formData
  );

  return data;
};
