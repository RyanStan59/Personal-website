import React from 'react';

const projects = [
  {
    title: 'BugOut',
    description:
      'A featured GitHub project from my portfolio. Check out the repository to see the code, setup, and ongoing progress.',
    tags: ['GitHub', 'Personal Project', 'Software'],
    href: 'https://github.com/RyanStan59/BugOut',
    cta: 'View on GitHub',
  },
  {
    title: 'Project Two',
    description:
      'Another project highlight. Keep this to 1–2 lines so the cards stay clean.',
    tags: ['Java', 'Data Structures'],
    href: 'https://github.com/RyanStan59',
    cta: 'View on GitHub',
  },
  {
    title: 'Project Three',
    description:
      'Add a portfolio-worthy project here (class, hackathon, or personal build).',
    tags: ['Docker', 'Deployment'],
    href: 'https://github.com/RyanStan59',
    cta: 'View on GitHub',
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="sectionHeader">
        <h2>Projects</h2>
        <p className="muted">
          A few things I’ve built. (These are easy placeholders to edit.)
        </p>
      </div>

      <div className="grid grid--3">
        {projects.map((p) => (
          <article key={p.title} className="card card--project">
            <div className="cardTop">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
            </div>

            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="cardActions">
              <a
                className="button button--ghost"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta}
                <span className="buttonIcon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

