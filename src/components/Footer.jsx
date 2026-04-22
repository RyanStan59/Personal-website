import React from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <div className="container">
      <div className="footerCard reveal">
        <div className="footerLeft">
          <h2>Let’s connect</h2>
          <p className="muted">
            I’m currently looking for a summer internship. If you think I’d be a
            good fit, I’d love to chat.
          </p>
          <p className="muted footerHint">
            Or send a quick message below (goes to Firebase Firestore).
          </p>
        </div>

        <div className="footerRight">
          <ContactForm />
          <div className="footerLinks">
            <a
              className="button button--primary"
              href="mailto:ryanstanisci@gmail.com"
            >
              Email me
            </a>
            <a
              className="button button--ghost"
              href={`${process.env.PUBLIC_URL}/images/Ryan_s_Resume (1).pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              className="button button--ghost"
              href="https://github.com/RyanStan59"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button--ghost"
              href="https://linkedin.com/in/ryan-stanisci"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="fineprint">
            © {new Date().getFullYear()} Ryan Stanisci
          </p>
        </div>
      </div>
    </div>
  );
}

