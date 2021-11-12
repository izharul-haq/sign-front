import React from 'react';
import ElgamalKeyDashboard from '~/components/pages/key/ElgamalKeyDashboard';
import MainTemplate from '~/components/template/MainTemplate';

const ElgamalKeyPage: React.FC = () => {
  return (
    <MainTemplate>
      <ElgamalKeyDashboard />
    </MainTemplate>
  );
};

export default ElgamalKeyPage;
