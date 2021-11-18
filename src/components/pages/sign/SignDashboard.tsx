import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsQuestionDiamond } from 'react-icons/bs';
import { getSign, verifySign } from '~/api/sign';
import OutputTable from '~/components/common/OutputTable';

type SignInput = {
  algo: 'rsa' | 'dss';
  message: FileList;
  sign?: string;
  key: string;
  attach: boolean;
}

const SignDashboard: React.FC = () => {
  const [mode, setMode] = useState<'sign' | 'vrfy'>('sign');
  const [sign, setSign] = useState<string | undefined>();
  const [open, setOpen] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean | undefined>();
  const [file, setFile] = useState<string | undefined>();

  const { register, handleSubmit } = useForm();

  const onSign = async (data: SignInput) => {
    if (data.attach) {
      await getSign(data.algo, data.message[0], data.key, + data.attach as 0 | 1, file as string);
    } else {
      const signature = await getSign(data.algo, data.message[0], data.key, + data.attach as 0 | 1, file as string);
      setSign(signature as string);
    }
  };

  const onVerify = async (data: SignInput) => {
    const isValid = await verifySign(data.algo, data.message[0], data.key, data.sign as string);
    setValid(isValid);
  };

  return (
    <div className="page-container text-jordy-blue-900">
      <div className="mb-8">
        <div className="page-title mb-1">
          Create and Verify
        </div>
        <div className="italic">Digital signature</div>
      </div>
      <form onSubmit={handleSubmit(mode === 'sign' ? onSign : onVerify)}>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <div className="font-semibold w-60 text-lg" >Algorithm used</div>
          <div className="flex flex-row justify-evenly w-full">
            <div className="flex flex-row space-x-2 items-center">
              <input
                id="algo-rsa"
                type="radio"
                value="rsa"
                required
                {...register('algo')}
              />
              <label htmlFor="algo-rsa">RSA algorithm</label>
            </div>
            <div className="flex flex-row space-x-2 items-center">
            <input
                id="algo-elg"
                type="radio"
                value="dsa"
                required
                {...register('algo')}
              />
              <label htmlFor="algo-elg">DSA algorithm</label>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <div className="font-semibold w-60 text-lg" >Upload file</div>
          <input
            className="w-full"
            id="upload-file"
            type="file"
            required
            {...register('message')}
            onChange={(e) => setFile((e.target.value as string).slice(12))}
          />
        </div>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <div className="font-semibold w-60 text-lg">Signature</div>
          <input
            className="input-text"
            type="text"
            placeholder="Digital signature. Fill it when trying to verify the signature"
            {...register('sign')}
          />
        </div>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <div className="font-semibold w-60 text-lg flex flex-row space-x-2 items-center">
            <span>Key</span>
            <span
              className="cursor-pointer hover:text-lightning-yellow-500"
              onClick={() => setOpen(true)}
            >
              <BsQuestionDiamond />
            </span>
          </div>
          <input
            className="input-text"
            type="text"
            placeholder="Key used to create signature or verify the signature"
            required
            {...register('key')}
          />
        </div>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <input
            id="attach"
            type="checkbox"
            {...register('attach')}
          />
          <label htmlFor="attach" className="font-semibold">Attach Signature to File</label>
        </div>
        <div className="mb-4 flex flex-row space-x-4 items-center">
          <div className="w-full"></div>
          <div className="flex flex-row space-x-2">
            <button
              onClick={() => setMode('vrfy')}
              type="submit"
              className="button button-secondary"
            >
              Verify
            </button>
            <button
              onClick={() => setMode('sign')}
              type="submit"
              className="button button-primary"
            >
              Sign
            </button>
          </div>
        </div>
      </form>

      <OutputTable
        output={mode === 'sign' ? sign : `Your digital signature is ${valid === false ? 'not ' : ''}valid`}
      />

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 min-h-screen w-full flex justify-center items-center backdrop-filter backdrop-blur bg-black bg-opacity-20"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="flex flex-col p-4 rounded-lg text-jordy-blue-900 bg-jordy-blue-200 shadow">
            <Dialog.Overlay className="w-full h-full" />
            <Dialog.Title
              as="div"
              className="font-bold text-pine-500 text-xl mb-2 uppercase text-center"
            >
              NOTE
            </Dialog.Title>
            <Dialog.Description as="div" className="mb-4 text-center w-96">
              Please follow the same format as being shown in Generate Key.
              For Example, if in Generate Key public key is <span className="font-mono font-semibold">(12, 345)</span>,
              then please insert public key as <span className="font-mono font-semibold">12, 345</span> (without parentheses).
            </Dialog.Description>
            <button
              className="button button-primary"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
              {/* </>
            {modal === 'hint' ? (
              <>
                
            ) : (
              <>
                <Dialog.Title
                  as="div"
                  className="font-bold text-pine-500 text-xl mb-2 uppercase text-center"
                >
                  Your Digital Signature
                </Dialog.Title>
                <Dialog.Description as="div" className="mb-4 text-center w-96">
                  <div className="mb-2">Here is your digital signature.</div>
                  <input className="input-text text-center" type="text" readOnly value={sign} />
                </Dialog.Description>
                <div className="flex flex-row w-96 space-x-2 items-center justify-center">
                  <button
                    className="button button-secondary"
                    onClick={() => setModal(undefined)}
                  >
                    Close
                  </button>
                  <button
                    className="button button-secondary"
                    onClick={() => navigator.clipboard.writeText(sign as string)}
                  >
                    Copy Signature
                  </button>
                  <button
                    className="button button-primary"
                    onClick={() => {
                      const content = text + '\n\n\n' + 'SIGNATURE: ' + sign;
                      saveAsTextFile(file as string, content);
                    }}
                  >
                    Attach to File
                  </button>
                </div>
              </>
            )} */}
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SignDashboard;
