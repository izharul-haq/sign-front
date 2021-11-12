import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getRSAKey } from '~/api/RSA';
import { RSAKeyInput } from '~/models/RSA';
import { saveAsJSONFile } from '~/utils/key';

const RSAKeyDashboard: React.FC = () => {
  const [e, setE] = useState<string | undefined>();
  const [d, setD] = useState<string | undefined>();
  const [n, setN] = useState<string | undefined>();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: RSAKeyInput) => {
    try {
      const { pub_key, pri_key } = await getRSAKey(data);

      setE(pub_key.e); setD(pri_key.d); setN(pub_key.n);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div className="page-container text-jordy-blue-900">
      <div className="mb-8">
        <div className="page-title mb-1">
          Key Generator
        </div>
        <div className="italic">For RSA algorithm</div>
      </div>
      <div className="mb-2 p-2 rounded-md bg-jordy-blue-600 text-shocking-200">
        <span className="font-semibold">NOTE:</span> To generate big prime number(s) click{' '}
        <a
          className="font-bold cursor-pointer"
          href="https://bigprimes.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </a>
      </div>
      <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="mb-4 flex space-x-4 items-center">
          <div className="w-8">P</div>
          <div className="w-full">
            <input
              className="input-number"
              type="number"
              min="1009"
              required
              placeholder="Random prime number"
              {...register('p')}
            />
          </div>
        </div>
        <div
          className="mb-4 flex space-x-4 items-center">
          <div className="w-8">Q</div>
          <div className="w-full">
            <input
              className="input-number"
              type="number"
              min="1009"
              required
              placeholder="Random prime number other than P"
              {...register('q')}
            />
          </div>
        </div>
        <div
          className="mb-2 flex space-x-4 items-center">
          <div className="w-8">E</div>
          <div className="w-full">
            <input
              className="input-number"
              type="number"
              min="2"
              required
              placeholder="Random integer greater than 1"
              {...register('e')}
            />
          </div>
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="w-full"></div>
          <div>
            <button className="button button-primary">
              Generate
            </button>
          </div>
        </div>
      </form>
      <div className="mb-2 flex flex-col space-y-2 rounded-md">
        <div className="flex justify-between space-x-2 items-center">
          <div className="w-32">Public Key</div>
          <div className="w-full">
            <input
              className="input-text"
              value={ e ? `(${e}, ${n})` : '' }
              placeholder="Public key goes here"
              readOnly
            />
          </div>
          <button
            type="button"
            className="button button-secondary max-w-max"
            onClick={() => {
              const content = { e: e as string, n: n as string };
              saveAsJSONFile(content, 'rsa_public');
            }}
          >
            Save to JSON File
          </button>
        </div>
        <div className="flex justify-between space-x-2 items-center">
          <div className="w-32">Private Key</div>
          <div className="w-full">
            <input
              className="input-text"
              value={ d ? `(${d}, ${n})` : '' }
              placeholder="Private key goes here"
              readOnly
            />
          </div>
          <button
            type="button"
            className="button button-secondary max-w-max"
            onClick={() => {
              const content = { d: d as string, n: n as string };
              saveAsJSONFile(content, 'rsa_private');
            }}
          >
            Save to JSON File
          </button>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-full"></div>
        <div className="flex space-x-2">
          <button
            className="button button-primary w-max"
            onClick={() => {
              navigator.clipboard.writeText(`${e}, ${n}`);
            }}
          >
            Copy Public Key
          </button>
          <button
            className="button button-primary w-max"
            onClick={() => {
              navigator.clipboard.writeText(`${d}, ${n}`);
            }}
          >
            Copy Private Key
          </button>
          <button
            className="button button-primary w-max"
            onClick={() => {
              navigator.clipboard.writeText(`${e}, ${d}, ${n}`);
            }}
          >
            Copy Both Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default RSAKeyDashboard;
