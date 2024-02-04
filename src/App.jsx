import { useState, createContext } from 'react';
import './style/App.scss';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

export const GithubFormStateContext = createContext();

function App() {
  const [params, setParams] = useState({ login: '', enabled: false });
  return (
    <GithubFormStateContext.Provider value={[params, setParams]}>
      <NavBar
        menuItems={[
          { name: 'App description', path: '' },
          { name: 'Github Api', path: 'api' },
          { name: 'Calculator', path: 'calculator' },
        ]}
      />
      <h1>Recruitment task</h1>
      <Outlet />
    </GithubFormStateContext.Provider>
  );
}

export default App;
