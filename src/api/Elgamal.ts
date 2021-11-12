import { ElgamalKeyInput, ElgamalKeyOutput } from '~/models/Elgamal';
import { BaseInstance } from './base';

export const getElgamalKey = async (reqBody: ElgamalKeyInput): Promise<ElgamalKeyOutput> => {
  const { data } = await BaseInstance.post<ElgamalKeyOutput>(
    '/sign/key/all?algo=elg',
    reqBody
  );

  return data;
};
