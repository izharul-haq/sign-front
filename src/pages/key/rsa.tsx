import React from 'react';
import RSAKeyDashboard from '~/components/pages/key/RSAKeyDashboard';
import MainTemplate from '~/components/template/MainTemplate';

const RSAKeyPage: React.FC = () => {
  return (
    <MainTemplate>
      <RSAKeyDashboard />
    </MainTemplate>
  );
};

export default RSAKeyPage;
