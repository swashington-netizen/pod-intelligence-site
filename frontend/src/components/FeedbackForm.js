/**
 * FeedbackForm Component
 *
 * Form for submitting feedback about a pod.
 * POSTs to /api/feedback endpoint.
 */

import React, { useState } from 'react';
import { submitFeedback } from '../api/pods';
import './FeedbackForm.css';

function FeedbackForm({ podId }) {
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter a message' });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      await submitFeedback({
        podId,
        message: message.trim(),
        userEmail: userEmail.trim() || undefined,
      });

      // Success - clear form and show success message
      setMessage('');
      setUserEmail('');
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your feedback! We'll follow up within 24 hours.',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit feedback. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-form">
      <h3 className="feedback-form__title">Leave Feedback</h3>
      <p className="feedback-form__description">
        Have a question or suggestion? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="feedback-form__field">
          <label htmlFor="message" className="feedback-form__label">
            Message <span className="feedback-form__required">*</span>
          </label>
          <textarea
            id="message"
            className="feedback-form__textarea"
            rows="4"
            placeholder="Share your thoughts, questions, or suggestions..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="feedback-form__field">
          <label htmlFor="userEmail" className="feedback-form__label">
            Email <span className="feedback-form__optional">(optional)</span>
          </label>
          <input
            type="email"
            id="userEmail"
            className="feedback-form__input"
            placeholder="your.email@salesforce.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <p className="feedback-form__help">
            Leave your email if you'd like a response
          </p>
        </div>

        {submitStatus && (
          <div
            className={`feedback-form__status feedback-form__status--${submitStatus.type}`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          className="feedback-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send Feedback'}
        </button>
      </form>

      <p className="feedback-form__footer">
        Managed by the Portfolio Intelligence Team
      </p>
    </div>
  );
}

export default FeedbackForm;
