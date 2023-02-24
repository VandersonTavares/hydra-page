import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Service } from './components/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Service/>
    </div>
  );
}

export default App;
