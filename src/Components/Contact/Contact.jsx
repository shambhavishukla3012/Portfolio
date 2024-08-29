import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init("KQZ_RDI4Gl0OnnkP0");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send email to you
      await emailjs.send('service_kvdv9kh', 'template_ickyb4e', formData); 
      // Send automated response to user
      await emailjs.send('service_kvdv9kh', 'template_eo00q08', {
        to_email: formData.email,  
        name: formData.name,
        email: formData.email
      });

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>


    </section>

    
  );
};

export default Contact;