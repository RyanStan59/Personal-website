import React from 'react';
import ContactForm from './ContactForm';

export default function ConnectFab({
  className = 'button button--primary navConnect',
  label = 'Connect With Me',
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {label}
      </button>

      {open ? (
        <div className="modalOverlay" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Contact Ryan"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <div>
                <div className="modalTitle">Connect With Me</div>
                <div className="modalSub muted">Send a message (saved in Firestore).</div>
              </div>
              <button type="button" className="modalClose" onClick={() => setOpen(false)}>
                <span aria-hidden="true">x</span>
                <span className="srOnly">Close</span>
              </button>
            </div>

            <ContactForm />
            <div className="modalFine muted">
              Prefer email?{' '}
              <a className="link" href="mailto:ryanstanisci@gmail.com">
                ryanstanisci@gmail.com
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
