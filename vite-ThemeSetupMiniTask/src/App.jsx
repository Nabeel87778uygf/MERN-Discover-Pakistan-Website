import React from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Culture from './pages/Culture';
import History from './pages/History';

function App() {
  return (
    <MainLayout>
      <Home />
      <History />
      <Culture />
      <Contact />
    </MainLayout>
  );
}

export default App;