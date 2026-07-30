import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send Message");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);
    setButtonText("Sending...");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setButtonText("✅ Message Sent");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setButtonText("Send Message");
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>

      <form onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-msg">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">
              {errors.message}
            </span>
          )}
        </div>

        <button
          className="button"
          disabled={loading}
        >
          {buttonText}
        </button>

      </form>
    </section>
  );
}

export default Contact;