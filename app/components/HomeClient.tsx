'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import InView from './InView'
import TextEffect from './TextEffect'

type Project = {
  title: string
  description: string
  year: string
  href: string
}

type ExperienceEntry = {
  years: string
  role: string
  company: string
}

type Post = {
  slug: string
  title: string
  date: string
  excerpt?: string
}

const projects: Project[] = [
  {
    title: 'Edge Computer Vision Platform',
    description:
      'Fleet-scale inference running computer-vision models on devices deployed in the wild.',
    year: '2026',
    href: '#',
  },
  {
    title: 'Crop Signal Platform',
    description:
      'Turning optical remote-sensing data from polytunnels and glasshouses into something a grower can act on.',
    year: '2024',
    href: '#',
  },
  {
    title: 'IoT Telemetry on AWS',
    description:
      'A serverless backbone on AWS IoT Core and DynamoDB moving millions of device events a day without drama.',
    year: '2023',
    href: '#',
  },
]

const experience: ExperienceEntry[] = [
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

export default function HomeClient({ posts }: { posts: Post[] }) {
  return (
    <>
      {/* 01 — Intro, centred */}
      <section className="intro section--centred">
        <motion.h1
          className="wordmark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <TextEffect text="Jeremy Davidson" />
        </motion.h1>
        <InView delay={0.45} as="div">
          <p className="role">
            Principal Software Engineer at <em>Rocketboots</em>. Oxfordshire, UK.
          </p>
          <p className="bio">
            Jeremy builds the quiet infrastructure that keeps computer-vision
            systems honest &mdash; the pipelines, the edge fleet, the security
            boundaries, the small decisions that compound into something people
            can actually rely on. He earned that taste shipping remote-sensing
            platforms at Gardin and now does it as Rocketboots&rsquo; first hire
            in Europe.
          </p>
          <p className="focus">
            <strong>Currently</strong> &mdash; edge computing and
            computer-vision infrastructure at Rocketboots.{' '}
            <strong>Previously</strong> &mdash; platform engineering and
            information security at Gardin. <strong>Always</strong> &mdash;
            Python, AWS, and a soft spot for Linux boxes in polytunnels.
          </p>
        </InView>
      </section>

      {/* 02 — Selected Projects, left rail */}
      <InView as="section" className="section--left">
        <div id="projects" className="section-anchor" />
        <h2 className="section-label">
          <span className="section-number">02</span> Selected Projects
        </h2>
        <ul className="project-list">
          {projects.map((project) => (
            <motion.li
              key={project.title}
              className="project-item"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="project-main"
                variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              >
                <Link href={project.href} className="project-title">
                  {project.title}
                </Link>
                <p className="project-description">{project.description}</p>
                <motion.span
                  className="project-rule"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.45, ease: [0.2, 0.65, 0.35, 1] }}
                  style={{ transformOrigin: '0% 50%' }}
                  aria-hidden
                />
              </motion.div>
              <motion.span
                className="project-year"
                variants={{ rest: { y: 0 }, hover: { y: -2 } }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              >
                {project.year}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </InView>

      {/* 03 — Experience, right rail, monospaced */}
      <InView as="section" className="section--right section--mono">
        <div id="experience" className="section-anchor" />
        <h2 className="section-label">
          <span className="section-number">03</span> Experience
        </h2>
        <ul className="experience-list">
          {experience.map((entry, i) => (
            <motion.li
              key={`${entry.years}-${entry.company}`}
              className="experience-item"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.2, 0.65, 0.35, 1],
              }}
            >
              <span className="experience-years">{entry.years}</span>
              <span className="experience-role">{entry.role}</span>
              <span className="experience-company">{entry.company}</span>
            </motion.li>
          ))}
        </ul>
      </InView>

      {/* 04 — Writing, centred small caps */}
      <InView as="section" className="section--centred">
        <div id="writing" className="section-anchor" />
        <h2 className="section-label">
          <span className="section-number">04</span> Writing
        </h2>
        {posts.length === 0 ? (
          <p className="muted">No posts yet.</p>
        ) : (
          <ul className="article-list">
            {posts.map((post) => (
              <li key={post.slug} className="article-item">
                <time className="article-date">
                  {new Date(post.date)
                    .toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                    })
                    .toUpperCase()}
                </time>
                <h3 className="article-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="article-excerpt">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        )}
        <p className="view-all">
          <Link href="/blog">View all →</Link>
        </p>
      </InView>

      {/* 05 — Connect, full-bleed inverted */}
      <section className="section--bleed">
        <div id="connect" className="section-anchor" />
        <InView className="section--bleed__inner">
          <h2 className="section-label">
            <span className="section-number">05</span> Get in touch
          </h2>
          <p className="bio">
            Always up for a good conversation about infrastructure, agritech,
            remote sensing, or why Python is still the right call. Reach out at{' '}
            <code>hello@jeremydavidson.dev</code>.
          </p>
          <p className="socials">
            <a
              href="https://github.com/jdavidson"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href="https://www.linkedin.com/in/jdavidson"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href="https://twitter.com/jdavidson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </InView>
      </section>
    </>
  )
}
