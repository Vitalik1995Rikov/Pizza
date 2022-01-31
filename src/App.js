import React from 'react';

import { Pizza, Filters } from './components/';
import Layout from './layouts/Layout';
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
