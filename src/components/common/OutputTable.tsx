import React, { useState } from 'react';

interface Props {
  output?: string;
}

const OutputTable: React.FC<Props> = ({ output }) => {
  const [copied, setCopied] = useState<boolean>(false);
  
  return (
    <div className="">
      <div className="mb-2 font-semibold uppercase">Output</div>
      <textarea className="input-text text-center" readOnly value={output} />
      <div className="flex flex-row space-x-4 items-center">
        <div className="w-full"></div>
        <button
          className="button button-primary w-32"
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(output as string);
            setCopied(true);
            setTimeout(() => setCopied(false), 500);
          }}
        >
          {copied ? 'Copied' : 'Copy Output'}
        </button>
      </div>
    </div>
  );
};

export default OutputTable;