import React from 'react';
import Service from './Service';
const Services = () => {
  return (
    <section id="services">
      <div class="container">
        <h1 class="title">Services</h1>
        <h2>
          Credibly reintermediate backend ideas for cross-platform models.
          Continually reintermediate integrated processes through technically
          sound intellectual capital. Holistically foster superior methodologies
          without market-driven best practices.
        </h2>
        <div class="services-box">
          <Service title="Project Analysis" type="fa-atom" />
          <Service title="Project Design" type="fa-pencil-alt" />
          <Service title="Production & Building" type="fa-hammer" />
          <Service title="Furniture design" type="fa-couch" />
          <Service title="Office Design" type="fa-desktop" />
          <Service title="Design Consultancy" type="fa-users" />
          <Service title="Home Advising" type="fa-home" />
          <Service title="Remodeling" type="fa-wrench" />
        </div>
      </div>
    </section>
  );
};
export default Services;
