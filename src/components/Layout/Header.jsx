import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login-button';
import LogoutButton from '../logout-button';


const { primary_accent_color } = colors;

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="justify-content-end" style={{ paddingRight: '20px' }}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

function HeaderContent() {
  const { isAuthenticated } = useAuth0(); 

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: primary_accent_color,
        padding: '10px',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '25px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '25px' }}>
          Graphs
        </Link>
        {isAuthenticated && ( 
          <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '25px' }}>
            Profile
          </Link>
        )}
        <AuthNav /> 
      </div>
    </div>
  );
}

export { HeaderContent };


