import React from 'react';
import About from './About';
import Service from './Services';
import Projects from './Projects';
import Pricings from './Pricings';
import Testimonials from './Testimonials';
const Middle = () => {
  return (
    <React.Fragment>
      <About />
      <Service />
      <Projects />
      <Pricings />
      <Testimonials />
    </React.Fragment>
  );
};
export default Middle;
