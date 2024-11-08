import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Auth0ProviderMock, loginWithRedirect, logout } from '../utils/auth0-utils.js';
import HeaderContent from '../components/Layout/Header';
import Profile from '../components/pages/Profile';
import LoginButton from '../components/login-button';
import LogoutButton from '../components/logout-button';

beforeEach(() => {
  loginWithRedirect.mockClear();
  logout.mockClear();
});

describe('Auth0 Authentication Flow', () => {
  test('renders login button and triggers login', () => {
    render(
      <Auth0ProviderMock isAuthenticated={false}>
        <LoginButton />
      </Auth0ProviderMock>
    );
    
    const loginButton = screen.getByText(/Log In/i);
    fireEvent.click(loginButton);
    
    expect(loginWithRedirect).toHaveBeenCalled();
  });

  test('renders logout button and triggers logout', () => {
    render(
      <Auth0ProviderMock isAuthenticated={true}>
        <LogoutButton />
      </Auth0ProviderMock>
    );
    
    const logoutButton = screen.getByText(/Log Out/i);
    fireEvent.click(logoutButton);
    
    expect(logout).toHaveBeenCalled();
  });

  test('renders profile page when user is authenticated', () => {
    const user = { name: 'Test User', email: 'test@example.com' };
    
    render(
      <Auth0ProviderMock isAuthenticated={true} user={user}>
        <Profile />
      </Auth0ProviderMock>
    );

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });

});