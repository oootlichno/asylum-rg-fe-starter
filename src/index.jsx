import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import Profile from './components/pages/Profile';


import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;
const store = configureStore({ reducer: reducer });

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Layout.Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Layout.Header>
      <Layout.Content>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/graphs" component={GraphsContainer} />
          <Route path="/profile" component={Profile} /> 
          <Route component={NotFoundPage} />
        </Switch>
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: primary_accent_color, color: '#E2F0F7' }}>
        <FooterContent />
      </Layout.Footer>
      <Layout.Footer style={{ backgroundColor: primary_accent_color, padding: 0 }}>
        <SubFooter />
      </Layout.Footer>
    </Layout>
  );
};

ReactDOM.render(
  <Auth0ProviderWithHistory>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </Auth0ProviderWithHistory>,
  document.getElementById('root')
);