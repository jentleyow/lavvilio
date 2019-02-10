import React from 'react';
const Service = ({ title, type }) => {
  const className = 'fas ' + type;
  return (
    <div className="service">
      <i className={className} />
      <h1>{title}</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  );
};
export default Service;
