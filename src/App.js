import React from 'react';

import { Pizza, Filters, Sort } from './components/';
import Layout from './layouts/Layout';
// import Basket from './components/Basket';

const App = () => {
  return (
    <Layout>
      <Filters />
      <Sort />
      <Pizza />
      {/* <Basket /> */}
    </Layout>
  );
};

export default App;
