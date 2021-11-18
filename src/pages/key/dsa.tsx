import React from 'react';
import DSAKeyDashboard from '~/components/pages/key/DSAKeyDashboard';
import MainTemplate from '~/components/template/MainTemplate';

const ElgamalKeyPage: React.FC = () => {
  return (
    <MainTemplate>
      <DSAKeyDashboard />
    </MainTemplate>
  );
};

export default ElgamalKeyPage;
