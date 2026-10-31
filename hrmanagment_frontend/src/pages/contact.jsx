
import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting us!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="contact-page">

      <section className="contact-heading">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </section>

      <section className="container contact-container">

        <div className="row g-4">

          <div className="col-md-5">
            <div className="contact-info">

              <h2>Get In Touch</h2>

              <p>
                Have questions or need assistance?
                Feel free to contact us.
              </p>

              <div className="contact-item">
                <h5>Address</h5>
                <p>Hyderabad, Telangana, India</p>
              </div>

              <div className="contact-item">
                <h5>Email</h5>
                <p>support@akshara.com</p>
              </div>

              <div className="contact-item">
                <h5>Working Hours</h5>
                <p>Monday - Friday</p>
              </div>

            </div>
          </div>

          <div className="col-md-7">
            <div className="contact-form-card">

              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-button">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
