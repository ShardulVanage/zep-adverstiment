import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero';
import Feature from './component/Feature';
import Sylabus from './component/Sylabus';
import Instructor from './component/Instructors';
import Pricing from './component/Pricing';


function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Feature />
      <Sylabus />
      <Instructor />
      <Pricing />
    </div>
  );
}

export default App;
