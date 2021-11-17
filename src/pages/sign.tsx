import React from 'react';
import SignDashboard from '~/components/pages/sign/SignDashboard';
import MainTemplate from '~/components/template/MainTemplate';

const SignPage: React.FC = () => {
  return (
    <MainTemplate>
      <SignDashboard />
    </MainTemplate>
  );
};

export default SignPage;
