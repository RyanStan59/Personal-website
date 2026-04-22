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
    title: 'Flagship',
    description:
      'A SaaS product I am currently building and refining. More details, features, and launch updates are coming as development continues.',
    tags: ['SaaS', 'Startup', 'In Progress'],
    href: '',
    cta: 'Coming Soon',
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
        <p className="muted">A few things I&apos;ve built.</p>
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
              {p.href ? (
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
              ) : (
                <span className="button button--ghost button--disabled">{p.cta}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
