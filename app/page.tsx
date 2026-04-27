import { getAllPosts } from './lib/posts'
import HomeClient from './components/HomeClient'

export default function Home() {
  const posts = getAllPosts()
    .slice(0, 4)
    .map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt }))

  return <HomeClient posts={posts} />
}
