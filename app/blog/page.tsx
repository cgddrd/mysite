import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import InView from '../components/InView'

export const metadata = {
  title: 'Writing — Jeremy Davidson',
  description:
    'Notes on platform engineering, computer vision, information security, and the infrastructure behind production ML systems.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="intro section--centred">
        <h1 className="wordmark">Writing</h1>
        <p className="role">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </section>

      <InView as="section" className="section--centred">
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
                <h2 className="article-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.excerpt && (
                  <p className="article-excerpt">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </InView>
    </>
  )
}
