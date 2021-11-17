import React from 'react';
import DSSKeyDashboard from '~/components/pages/key/DSSKeyDashboard';
import MainTemplate from '~/components/template/MainTemplate';

const ElgamalKeyPage: React.FC = () => {
  return (
    <MainTemplate>
      <DSSKeyDashboard />
    </MainTemplate>
  );
};

export default ElgamalKeyPage;
