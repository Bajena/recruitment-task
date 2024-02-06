import './style/App.scss';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main>
      <NavBar
        description="Recruitment task"
        menuItems={[
          { name: 'App description', path: '' },
          { name: 'Github Api', path: 'api' },
          { name: 'Calculator', path: 'calculator' },
        ]}
      />
      <section className="section-container">
        <Outlet />
      </section>
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;
