import React from 'react';
import Testimonial from './Testimonial';
import test1 from '../../img/test1.jpg';
import test2 from '../../img/test2.jpg';
import test3 from '../../img/test3.jpg';
const Testimonials = () => {
  return (
    <section id="testimonial">
      <div class="container">
        <h1 class="title">Testimonials</h1>
        <h2>Testimony from our satisfied clients.</h2>
        <div class="testimonial-box">
          <Testimonial src={test1} author="Lily Neo" />
          <Testimonial src={test2} author="Tim Allen" />
          <Testimonial src={test3} author="Sarah Jessica" />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
