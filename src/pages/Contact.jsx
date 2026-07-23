import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <p className="contact-text">
        Feel free to reach out if you'd like to collaborate, discuss a project,
        or just connect.
      </p>

      <div className="contact-card">
        <h2>Email</h2>
        <a href="mailto:mohammad.kaif3140@gmail.com">
          mohammad.kaif3140@gmail.com
        </a>
      </div>

      <div className="contact-card">
        <h2>Phone</h2>
        <a href="tel:+919170505164">
          +91 91705 05164
        </a>
      </div>
    </div>
  );
};

export default Contact;