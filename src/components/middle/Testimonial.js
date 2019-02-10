import React from 'react';
const Testimonial = ({ src, author }) => {
  return (
    <div class="testimonial">
      <div class="img">
        <img src={src} />
      </div>
      <div class="greybox">
        <p>
          <i class="fas fa-quote-left" />
          It’s really helped us grow. I can keep all of the customer’s
          information in there so if I need to look up something in the future
          or call them for a follow up, I have all of that there, so it’s really
          helped us organize the whole business.
          <i class="fas fa-quote-right" />
        </p>
        <h2 class="orangetext">{author}</h2>
      </div>
    </div>
  );
};
export default Testimonial;
