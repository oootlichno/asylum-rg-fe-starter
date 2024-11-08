import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTHO_DOMAIN;
  const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
