import React from 'react';
import Title from './title';
import About from './about';
import ProductList from './productList';
import Contact from './contact';
import Toggle from './toggle';

function App() {
  return (
    <div>
      <Toggle />
      <Title />
      <About />
      <ProductList />
      <Contact />
    </div>

  );
}

export default App;
