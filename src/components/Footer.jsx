import React from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <div className="container">
      <div className="footerCard reveal">
        <div className="footerLeft">
          <h2>Let&apos;s connect</h2>
          <p className="muted">
            I recently graduated with a Computer Science degree and I&apos;m looking
            for an opportunity where I can contribute, keep learning, and grow
            as a developer. If you think I&apos;d be a good fit, I&apos;d love to chat.
          </p>
          <p className="muted footerHint">
            Or send a quick message below (goes to Firebase Firestore).
          </p>
        </div>

        <div className="footerRight">
          <ContactForm />
          <div className="footerLinks">
            <a className="button button--primary" href="mailto:ryanstanisci@gmail.com">
              Email me
            </a>
            <a
              className="button button--ghost"
              href={`${process.env.PUBLIC_URL}/images/Ryan_s_Resume (5).pdf`}
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

          <p className="fineprint">© {new Date().getFullYear()} Ryan Stanisci</p>
        </div>
      </div>
    </div>
  );
}
