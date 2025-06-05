import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rating: '',
  });

  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage('✅ Feedback submitted successfully!');
        setMessageColor('oklch(69.6% 0.17 162.48)');
        setFormData({ fullName: '', email: '', rating: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setMessage('❌ Failed to submit feedback.');
      setMessageColor('red');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Feedback Form</h2>

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="input"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />

        <label htmlFor="rating">Feedback Rating:</label>
        <select
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="input"
        >
          <option value="">-- Select Rating --</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <button type="submit" className="button">Submit</button>

        <p className="message" style={{ color: messageColor }}>{message}</p>
      </form>
    </div>
  );
};

export default FeedbackForm;
