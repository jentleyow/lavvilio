import React from 'react';
import AboutImg from '../../img/about.jpg';
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <img src={AboutImg} />
        </div>
        <div className="about-text">
          <h1>
            An award-winning design and dev team that is proud of our work.
          </h1>
          <h2 className="grey-text text-lighten-1">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </h2>
        </div>
      </div>
    </section>
  );
};
export default About;
