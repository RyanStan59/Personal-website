import React from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, firebaseConfigured } from '../firebase';

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState({ state: 'idle', message: '' });

  if (!firebaseConfigured || !db) {
    return (
      <div className="contactNotConfigured">
        <p className="muted" style={{ margin: 0 }}>
          Contact form is not configured yet. Add Firebase env vars (see `README.md`) to
          enable Firestore submissions.
        </p>
      </div>
    );
  }

  const canSubmit =
    name.trim().length >= 2 &&
    isValidEmail(email.trim()) &&
    message.trim().length >= 10 &&
    status.state !== 'submitting';

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
        pagePath: window.location.pathname,
        userAgent: navigator.userAgent,
      };

      await addDoc(collection(db, 'contactSubmissions'), payload);

      setName('');
      setEmail('');
      setMessage('');
      setStatus({ state: 'success', message: 'Message sent. Thanks for reaching out!' });
    } catch (err) {
      setStatus({
        state: 'error',
        message:
          'Could not send your message right now. Please try again or email me directly.',
      });
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      <div className="contactGrid">
        <label className="field">
          <span className="fieldLabel">Name</span>
          <input
            className="input"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            minLength={2}
          />
        </label>

        <label className="field">
          <span className="fieldLabel">Email</span>
          <input
            className="input"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label className="field">
        <span className="fieldLabel">Message</span>
        <textarea
          className="input textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to talk about?"
          required
          minLength={10}
        />
      </label>

      <div className="contactActions">
        <button className="button button--primary" type="submit" disabled={!canSubmit}>
          {status.state === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <span
          className={`contactStatus ${
            status.state === 'success'
              ? 'isSuccess'
              : status.state === 'error'
                ? 'isError'
                : ''
          }`}
          role={status.state === 'error' ? 'alert' : 'status'}
        >
          {status.message}
        </span>
      </div>
    </form>
  );
}

