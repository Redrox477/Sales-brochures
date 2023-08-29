import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Contact/Contact.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend
    const feedbackData = {
      name,
      email,
      subject,
      message,
    };

    // Make the API call to the backend
    axios.post('http://localhost:8001/feedback/addf', feedbackData)
      .then(response => {
        console.log(response.data);
        setIsSubmitted(true);

        // Show toast notification for success
        toast.success('Thank you for contacting us! We will get back to you soon.');
      })
      .catch(error => {
        console.error(error);
        toast.error('Oops! Something went wrong.');
      });

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className='contacthome'>
      <div id="contact" className="contact-area section-padding">
        <div className="container" id='contactus'>
          <div className="section-title text-center">
            <h1>Feedback</h1>
            <p>
              Please provide any specific comments or suggestions on how we can improve our service.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 meow">
              <div className="contact">
                {isSubmitted ? (
                  <div className="success-message">
                    <h2>Thank you for contacting us!</h2>
                    <p>We will get back to you soon.</p>
                  </div>
                ) : (
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                     
                      <div className="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          placeholder="Your Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-contact-bg" title="Submit Your Message!">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="col-lg-6 opop">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>3481 Melrose Place, Beverly Hills</p>

                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>Info@example.com</p>

                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>(+1) 517 397 7100</p>

                <i className="fa fa-clock-o"></i>
                <h4>Work Time</h4>
                <p>
                  Mon - Fri: 08.00 - 16.00.
                  <br />
                  Sat: 10.00 - 14.00
                </p>
              </div>
              <div>
                <img src="../src/img/Contact us-amico.png" alt="Trulli" width="500" height=""></img>
              </div>

            </div >

          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
