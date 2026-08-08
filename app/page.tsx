import {
  achievements,
  certifications,
  education,
  evidenceStats,
  experience,
  navigation,
  presentations,
  profile,
  publications,
  skillCategories,
} from "./portfolio-data";
import { EvidenceIndex, Navbar, ResumeMenu, Reveal, ThemeToggle } from "./portfolio-client";

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <span>{intro}</span> : null}
    </div>
  );
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    telephone: profile.phone,
    address: profile.location,
    url: profile.linkedin,
    sameAs: [profile.linkedin],
    jobTitle:
      "Pharm.D graduate focused on Pharmacovigilance, Drug Safety, Clinical Data Management and Clinical Research",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <EvidenceIndex />
      <ThemeToggle />

      <main className="portfolio-shell">
        <section id="profile" className="hero-section section-anchor">
          <div className="clinical-grid" aria-hidden="true" />
          <div className="hero-inner">
            <Reveal className="hero-copy">
              <p className="eyebrow">{profile.eyebrow}</p>
              <h1>{profile.name}</h1>
              <p className="hero-positioning">{profile.positioning}</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#connect">
                  Contact Me
                </a>
                <ResumeMenu />
              </div>
            </Reveal>

            <Reveal className="hero-evidence" delay={0.12}>
              <div className="signal-card" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="evidence-panel" aria-label="Professional evidence summary">
                {evidenceStats.map((item) => (
                  <div key={item.label} className="evidence-stat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                    <small>{item.meta}</small>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="content-section section-anchor" aria-labelledby="profile-heading">
          <Reveal>
            <SectionHeading
              eyebrow={`${navigation[0].number} — ${navigation[0].label}`}
              title="Professional Profile"
            />
            <div className="profile-document">
              <p id="profile-heading">{profile.profile}</p>
              <dl>
                <div>
                  <dt>Primary Direction</dt>
                  <dd>Drug Safety / Pharmacovigilance</dd>
                </div>
                <div>
                  <dt>Clinical Exposure</dt>
                  <dd>ADR documentation, causality assessment, medication review</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </section>

        <section id="capability" className="content-section section-anchor">
          <Reveal>
            <SectionHeading
              eyebrow={`${navigation[1].number} — ${navigation[1].label}`}
              title="Capability System"
              intro="Four competency groups organized for quick clinical and recruiter review."
            />
          </Reveal>
          <div className="capability-grid">
            {skillCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.04}>
                <article className="competency-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                  <ul>
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-anchor">
          <Reveal>
            <SectionHeading
              eyebrow={`${navigation[2].number} — ${navigation[2].label}`}
              title="Education & Clinical Experience"
              intro="A factual chronology of academic preparation and clinical exposure."
            />
          </Reveal>

          <div className="timeline-block">
            <div className="timeline-column">
              <h3>Education</h3>
              {education.map((item) => (
                <Reveal key={item.title}>
                  <article className="timeline-entry">
                    <time>{item.period}</time>
                    <h4>{item.title}</h4>
                    <p>{item.institution}</p>
                    {item.score ? <strong>{item.score}</strong> : null}
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="timeline-column">
              <h3>Clinical Training</h3>
              {experience.map((item) => (
                <Reveal key={item.title}>
                  <article className="timeline-entry">
                    <time>{item.period}</time>
                    <h4>{item.title}</h4>
                    <p>{item.organization}</p>
                    {"points" in item ? (
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {"departments" in item ? (
                      <div className="department-list">
                        {item.departments.map((dept) => (
                          <span key={dept}>{dept}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="content-section section-anchor">
          <Reveal>
            <SectionHeading
              eyebrow={`${navigation[3].number} — ${navigation[3].label}`}
              title="Research Records"
              intro="Publications and presentations shown as evidence records, without inflated claims."
            />
          </Reveal>

          <div className="research-grid">
            {publications.map((publication) => (
              <Reveal key={publication.title}>
                <article className="research-record">
                  <p>Publication</p>
                  <h3>{publication.title}</h3>
                  <dl>
                    <div>
                      <dt>Journal / Venue</dt>
                      <dd>{publication.venue}</dd>
                    </div>
                    <div>
                      <dt>Volume / Issue / Year</dt>
                      <dd>{publication.details}</dd>
                    </div>
                  </dl>
                  <a href={publication.href} target="_blank" rel="noopener noreferrer">
                    View Publication
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="presentations-wrap">
            <h3>Research Presentations</h3>
            {presentations.map((presentation) => (
              <article key={presentation.title} className="presentation-record">
                <h4>{presentation.title}</h4>
                <p>{presentation.venue}</p>
                <time>{presentation.date}</time>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="credentials" className="content-section section-anchor">
          <Reveal>
            <SectionHeading
              eyebrow={`${navigation[4].number} — ${navigation[4].label}`}
              title="Credentials & Achievements"
              intro="Certifications and merit records presented with their original factual detail."
            />
          </Reveal>

          <div className="certification-grid">
            {certifications.map((certification) => (
              <Reveal key={certification.name}>
                <article className="certification-record">
                  <span>Certification</span>
                  <time>{certification.year}</time>
                  <h3>{certification.name}</h3>
                  <p>{certification.issuer}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="achievements-block">
            <h3>Achievements</h3>
            <div className="achievement-grid">
              {achievements.map((achievement) => (
                <article key={achievement.result} className="achievement-record">
                  <p>{achievement.value}</p>
                  <strong>{achievement.result}</strong>
                  <span>{achievement.label}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="connect" className="connect-section section-anchor">
          <Reveal>
            <div className="connect-inner">
              <p className="eyebrow">{navigation[5].number} — {navigation[5].label}</p>
              <h2>Ready to discuss Drug Safety, PV, Clinical Data Management or Clinical Research roles.</h2>
              <div className="connect-actions">
                <a className="button button--primary" href={`mailto:${profile.email}`}>
                  Email Me
                </a>
                <a
                  className="button button--secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <ResumeMenu compact />
              </div>
              <address>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>{profile.phone}</span>
                <span>{profile.location}</span>
              </address>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>{profile.name} · Pharmacovigilance Portfolio</p>
      </footer>
    </>
  );
}
