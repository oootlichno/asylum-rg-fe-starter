
import React from 'react';
import { Auth0Context } from '@auth0/auth0-react';

export const loginWithRedirect = jest.fn();
export const logout = jest.fn();

export const Auth0ProviderMock = ({ children, isAuthenticated = false }) => {
  const mockAuth0Context = {
    isAuthenticated,
    user: isAuthenticated ? { name: 'Test User', email: 'test@example.com' } : null,
    loginWithRedirect, 
    logout, 
  };

  return (
    <Auth0Context.Provider value={mockAuth0Context}>
      {children}
    </Auth0Context.Provider>
  );
};

