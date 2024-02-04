// import { useState } from 'react';
import './style/App.scss';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar
        menuItems={[
          { name: 'App description', path: '' },
          { name: 'Github Api', path: 'api' },
          { name: 'Calculator', path: 'calculator' },
        ]}
      />
      <h1>Recruitment task</h1>
      <Outlet />
    </>
  );
}

export default App;
