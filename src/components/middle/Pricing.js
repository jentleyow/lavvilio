import React from 'react';
const Pricing = ({ type, price, popular }) => {
  let pricingClass = '';
  let popDiv = null;
  if (popular) {
    pricingClass = 'middle';
    popDiv = <div class="pop">Popular</div>;
  }
  return (
    <div class={`card ${pricingClass}`}>
      {popDiv}
      <ul>
        <li class="type">{type}</li>
        <li class="price">{price}</li>
        <li>
          <i class="fas fa-check" />
          Product recommendations
        </li>
        <li>
          <i class="fas fa-check" />
          Shopping service
        </li>
        <li>
          <i class="fas fa-check" />
          Initial style concept
        </li>
        <li>
          <i class="fas fa-check" />
          Unlimited revisions
        </li>
        <li>
          <i class="fas fa-check" />
          Post-design support
        </li>
        <li>
          <button class="btnStart">GET STARTED</button>
        </li>
      </ul>
    </div>
  );
};
export default Pricing;
