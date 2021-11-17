import { DSSKeyInput, DSSKeyOutput } from '~/models/DSS';
import { RSAKeyInput, RSAKeyOutput } from '~/models/RSA';
import { BaseInstance } from './base';

export const getKey = async (algo: 'rsa' | 'dss', reqBody: RSAKeyInput | DSSKeyInput): Promise<RSAKeyOutput | DSSKeyOutput> => {
  const { data } = await BaseInstance.post<RSAKeyOutput | DSSKeyOutput>(
    `/sign/key/all?algo=${algo}`,
    reqBody
  );

  return data;
}

export const getSign = async (algo: 'rsa' | 'dss', message: File, key: string, attach: 0 | 1, filename: string): Promise<string | void> => {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('key', key);
  
  const { data } = await BaseInstance.post<string>(
    `sign/file?algo=${algo}&attach=${attach}`,
    formData,
    attach ? { responseType: 'blob' } : undefined
  );

  if (attach) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
  } else {
    return data;
  }
}

export const verifySign = async (algo: 'rsa' | 'dss', message: File, key: string, sign?: string): Promise<boolean> => {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('key', key);
  formData.append('sign', sign as string);

  const { data } = await BaseInstance.post<boolean>(
    `/sign/verify?algo=${algo}`,
    formData
  );

  return data;
}