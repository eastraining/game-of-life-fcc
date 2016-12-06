import React from 'react';
import { render } from 'react-dom';

// stylistic components
const App = () => (
  <div className="main container">
    <Title />
    <div className="site-content">
      Coming Soon.
    </div>
    <Footer />
  </div>
);
const Title = () => (
  <h1 className="text-center title">Conway's Game of Life</h1>
);
const Footer = () => (
  <footer className="text-center footer">Cobbled together by Yu Dong Hee.</footer>
);

export default App;
