import './style/App.scss';
import { createContext } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext();

function App() {
  const appName = 'Recruitment task';
  const navigationArray = [
    { name: 'App description', path: '' },
    { name: 'Github Api', path: 'api' },
    { name: 'Calculator', path: 'calculator' },
  ];
  return (
    <AppContext.Provider value={{ appName, navigationArray }}>
      <main>
        <NavBar />
        <section className="section-container">
          <Outlet />
        </section>
        <Footer />
        <Toaster />
      </main>
    </AppContext.Provider>
  );
}

export default App;
