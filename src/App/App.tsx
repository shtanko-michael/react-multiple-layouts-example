import React from 'react';
import AuthProvider from 'components/AuthProvider/AuthProvider';
import Router from './Router/Router';

const App: React.FC = () => {
  return <AuthProvider>
    <Router />
  </AuthProvider>
}
export default App;
