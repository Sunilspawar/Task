import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Banner />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
