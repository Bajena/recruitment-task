import { useState } from 'react';
import './style/App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Initial project</h1>
      <div className="card">content</div>
    </>
  );
}

export default App;
