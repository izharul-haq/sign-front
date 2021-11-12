import React from 'react';
import MainDashboard from '~/components/pages/MainDahsboard';
import MainTemplate from '~/components/template/MainTemplate';

const IndexPage: React.FC = () => {
  return (
    <MainTemplate>
      <MainDashboard />
    </MainTemplate>
  );
};

export default IndexPage;
