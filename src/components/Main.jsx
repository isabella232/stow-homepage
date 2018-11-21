import React from 'react';
import Logo from '@stowprotocol/brand/components/Logo';
import Home from './Home';

const logoStyle = {
  position: 'fixed',
  width: 1000,
  height: 1000,
  bottom: -300,
  right: -200,
  zIndex: -10000000,
  opacity: 0.3,
  animation: 'App-logo-spin infinite 20s linear',
};

const Main = () => (
  <section>
    <Home />
    <Logo style={logoStyle} />
  </section>
);

export default Main;
