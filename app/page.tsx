import Link from 'next/link'
import { getAllPosts } from './lib/posts'

const projects = [
  {
    title: 'Edge Computer Vision Platform',
    description: 'Fleet-scale inference running computer-vision models on devices deployed in the wild.',
    year: '2026',
    href: '#',
  },
  {
    title: 'Crop Signal Platform',
    description: 'Turning optical remote-sensing data from polytunnels and glasshouses into something a grower can act on.',
    year: '2024',
    href: '#',
  },
  {
    title: 'IoT Telemetry on AWS',
    description: 'A serverless backbone on AWS IoT Core and DynamoDB moving millions of device events a day without drama.',
    year: '2023',
    href: '#',
  },
]

const experience = [
  {
    years: '2026—',
    role: 'Principal Software Engineer & Engineering Lead',
    company: 'Rocketboots (ASX:ROC)',
  },
  {
    years: '2021—2026',
    role: 'Principal Software Engineer & Head of Information Security',
    company: 'Gardin',
  },
  {
    years: '2018—2021',
    role: 'Senior Software Engineer',
    company: 'Placeholder Co.',
  },
  {
    years: '2015—2018',
    role: 'Software Engineer',
    company: 'Placeholder Co.',
  },
  {
    years: '2013—2015',
    role: 'Software Engineer',
    company: 'Placeholder Co.',
  },
]

export default function Home() {
  const posts = getAllPosts().slice(0, 4)

  return (
    <>
      <section className="intro">
        <h1 className="wordmark">Jeremy Davidson</h1>
        <p className="role">
          Principal Software Engineer at <em>Rocketboots</em>. Oxfordshire, UK.
        </p>
        <p className="bio">
          Jeremy builds the quiet infrastructure that keeps computer-vision systems
          honest &mdash; the pipelines, the edge fleet, the security boundaries, the small
          decisions that compound into something people can actually rely on. He
          earned that taste shipping remote-sensing platforms at Gardin and now does
          it as Rocketboots&rsquo; first hire in Europe.
        </p>
        <p className="focus">
          <strong>Currently</strong> &mdash; edge computing and computer-vision
          infrastructure at Rocketboots.{' '}
          <strong>Previously</strong> &mdash; platform engineering and information
          security at Gardin.{' '}
          <strong>Always</strong> &mdash; Python, AWS, and a soft spot for Linux
          boxes in polytunnels.
        </p>
      </section>

      <section id="projects">
        <h2 className="section-label">Selected Projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.title} className="project-item">
              <div className="project-main">
                <Link href={project.href} className="project-title">
                  {project.title}
                </Link>
                <p className="project-description">{project.description}</p>
              </div>
              <span className="project-year">{project.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience">
        <h2 className="section-label">Experience</h2>
        <ul className="experience-list">
          {experience.map((entry) => (
            <li key={`${entry.years}-${entry.company}`} className="experience-item">
              <span className="experience-years">{entry.years}</span>
              <span className="experience-role">{entry.role}</span>
              <span className="experience-company">{entry.company}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="writing">
        <h2 className="section-label">Writing</h2>
        {posts.length === 0 ? (
          <p className="muted">No posts yet.</p>
        ) : (
          <ul className="article-list">
            {posts.map((post) => (
              <li key={post.slug} className="article-item">
                <div className="article-main">
                  <h3 className="article-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  {post.excerpt && (
                    <p className="article-excerpt">{post.excerpt}</p>
                  )}
                </div>
                <time className="article-date">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </time>
              </li>
            ))}
          </ul>
        )}
        <p className="view-all">
          <Link href="/blog">View all →</Link>
        </p>
      </section>

      <section id="connect">
        <h2 className="section-label">Get in touch</h2>
        <p className="bio">
          Always up for a good conversation about infrastructure, agritech, remote
          sensing, or why Python is still the right call. Reach out at{' '}
          <code>hello@jeremydavidson.dev</code>.
        </p>
        <p className="socials">
          <a href="https://github.com/jdavidson" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true"> · </span>
          <a href="https://www.linkedin.com/in/jdavidson" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true"> · </span>
          <a href="https://twitter.com/jdavidson" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </section>
    </>
  )
}
