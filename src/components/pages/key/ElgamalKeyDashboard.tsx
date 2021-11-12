import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getElgamalKey } from '~/api/Elgamal';
import { ElgamalKeyInput } from '~/models/Elgamal';
import { saveAsJSONFile } from '~/utils/key';

const ElgamalKeyDashboard: React.FC = () => {
  const [y, setY] = useState<string | undefined>();
  const [g, setG] = useState<string | undefined>();
  const [x, setX] = useState<string | undefined>();
  const [p, setP] = useState<string | undefined>();
  const [q, setQ] = useState<string | undefined>();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: ElgamalKeyInput) => {
    try {
      const { pub_key, pri_key } = await getElgamalKey(data);
      setY(pub_key.y); setG(pub_key.g); setX(pri_key.x);
      setP(pub_key.p); setQ(pub_key.q);
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
        <div className="italic">For Elgamal algorithm</div>
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
              placeholder="A prime factor of a number one less than P"
              {...register('q')}
            />
          </div>
        </div>
        <div
          className="mb-2 flex space-x-4 items-center">
          <div className="w-8">X</div>
          <div className="w-full">
            <input
              className="input-number"
              type="number"
              min="2"
              required
              placeholder="Random integer less than Q"
              {...register('x')}
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
              value={ y ? `(${p}, ${q}, ${g}, ${y})` : '' }
              placeholder="Public key goes here"
              readOnly
            />
          </div>
          <button
            type="button"
            className="button button-secondary max-w-max"
            onClick={() => {
              const content = { y: y as string, g: g as string, p: p as string };
              saveAsJSONFile(content, 'elgamal_public');
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
              value={ x ? `(${x}, ${p}, ${q})` : '' }
              placeholder="Private key goes here"
              readOnly
            />
          </div>
          <button
            type="button"
            className="button button-secondary max-w-max"
            onClick={() => {
              const content = { x: x as string, p: p as string };
              saveAsJSONFile(content, 'elgamal_private');
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
              navigator.clipboard.writeText(`${y}, ${g}, ${p}`);
            }}
          >
            Copy Public Key
          </button>
          <button
            className="button button-primary w-max"
            onClick={() => {
              navigator.clipboard.writeText(`${x}, ${p}`);
            }}
          >
            Copy Private Key
          </button>
          <button
            className="button button-primary w-max"
            onClick={() => {
              navigator.clipboard.writeText(`${y}, ${g}, ${x}, ${p}`);
            }}
          >
            Copy Both Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElgamalKeyDashboard;