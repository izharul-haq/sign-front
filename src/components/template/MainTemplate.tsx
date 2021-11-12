import React from 'react';
import Navbar from '../common/Navbar';

const MainTemplate: React.FC = (props) => {
  return (
    <div className="antialiased w-full bg-gray-50">
      <Navbar />
      <main className="w-full min-h-screen pt-16">
        {props.children}
      </main>
    </div>
  );
};

export default MainTemplate;
