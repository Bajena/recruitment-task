import './style/App.scss';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Recruitment task</h1>
      <NavBar
        menuItems={[
          { name: 'App description', path: '' },
          { name: 'Github Api', path: 'api' },
          { name: 'Calculator', path: 'calculator' },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default App;
