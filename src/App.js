import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero';
import Feature from './component/Feature';
import Sylabus from './component/Sylabus';
import Instructor from './component/Instructors';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import { Testimonials } from './component/Testimoni';
import GContact from './component/GContact';


function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Feature />
      <Sylabus />
      <Instructor />
      <Pricing />
      <Testimonials />
      {/* <Contact></Contact> */}
      <GContact />
    </div>
  );
}

export default App;
