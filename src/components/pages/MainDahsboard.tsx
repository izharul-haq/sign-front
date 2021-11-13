import React from 'react';

const MESSAGE = `Dear User,

Thank you for using Sign. Sign is a web application to digitally signed your digital document(s) using digital signature. Digital signature will provide you some services in cryptography such as authentication and non-repudiation.

Sincerely,

Sign web app developer team

SIGNATURE: 716ABC07471CBB91`;

const MainDashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-row w-[49rem] h-[22rem] shadow-md">
          <textarea
            className="font-mono text-lg w-full resize-none rounded-lg border-0 shadow text-justify"
            readOnly
            value={MESSAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
