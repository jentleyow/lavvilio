import React from 'react';
import Project from './Project';
import img1 from '../../img/project1.jpg';
import img2 from '../../img/project2.jpg';
import img3 from '../../img/project3.jpg';
const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h1 class="title">Our Projects</h1>
        <div class="cards">
          <Project title="Living Wooden Decor" img={img1} />
          <Project title="White Bedroom Desk" img={img2} />
          <Project title="Wooden Dining Room" img={img3} />
        </div>
      </div>
    </section>
  );
};
export default Projects;
