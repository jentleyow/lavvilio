import React from 'react';
import Pricing from './Pricing';
const Pricings = () => {
  return (
    <section id="pricings">
      <div className="container">
        <div className="pricing-instruction">
          <h1 className="title">Pricings Plans & Options</h1>
          <p className="grey">
            Simple, flexible, and predictable pricing. <br />
            Choose which package is best suited for you.
          </p>
          <p>Need more? Let's get in touch!</p>
        </div>
        <div className="pricingbox">
          <Pricing type="CLASSIC" popular={false} price="450" />
          <Pricing type="REGULAR" popular={true} price="250" />
          <Pricing type="PREMIUM" popular={false} price="750" />
        </div>
      </div>
    </section>
  );
};
export default Pricings;
