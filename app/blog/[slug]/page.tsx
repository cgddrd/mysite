import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import InView from '../../components/InView'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} — Jeremy Davidson`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <header className="intro section--centred">
        <h1 className="wordmark">{post.title}</h1>
        <p className="role">
          <time>
            {new Date(post.date).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </p>
      </header>

      <InView>
        <MDXRemote source={post.content} />
      </InView>
    </article>
  )
}
