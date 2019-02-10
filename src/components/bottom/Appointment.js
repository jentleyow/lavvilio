import React from 'react';
const Appointment = () => {
  return (
    <section id="appointment">
      <div class="container">
        <div class="content">
          <div class="appointmentText">
            <h1 class="title">Let’s Design Together</h1>
            <p>
              Contact us if your are thinking of redesigning your home. Schedule
              a free consultation with a member of our design team.
            </p>
          </div>
          <form>
            <div class="nameEmailContainer">
              <input type="text" class="text" placeholder="Name" />
              <input type="email" class="text" placeholder="Email" />
            </div>
            <textarea class="text" placeholder="Message" />
            <button class="btnBookAppointment">BOOK APPOINTMENT</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Appointment;
