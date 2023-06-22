import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero';
import Feature from './component/Feature';
import Sylabus from './component/Sylabus';
import Instructor from './component/Instructors';
import Pricing from './component/Pricing';

import { Testimonials } from './component/Testimoni';
import GContact from './component/GContact';
import Banner from './component/Banner';
import Certificate from './component/Certificate';


function App() {
  return (
    <div className="App">
      <Banner />
      <Hero></Hero>
      <Feature />
      <Certificate />
      <Sylabus />
      <Instructor />
      <Pricing />
      <Testimonials />

      <GContact />
    </div>
  );
}

export default App;
