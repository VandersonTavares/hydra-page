import './App.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Service } from './components/Service';
import { TechSection } from './components/TechSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Service/>
      <TechSection/>
    </div>
  );
}

export default App;
