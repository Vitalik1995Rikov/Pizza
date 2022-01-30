import React from 'react';
import Pizza from './components/Pizza';
import Layout from './layouts/Layout';
import Filters from './components/Filters';
// import Basket from './components/Basket';

const App = () => {
  return (
    <Layout>
      <Filters />
      <Pizza />
      {/* <Basket /> */}
    </Layout>
  );
};

export default App;
