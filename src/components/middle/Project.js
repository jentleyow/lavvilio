import React from 'react';
const Project = ({ title, img }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img src={img} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
export default Project;
