import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner container">
        <Link href="/" className="site-nav__wordmark">
          Jeremy Davidson
        </Link>
        <div className="site-nav__links">
          <Link href="/#projects">Projects</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/#connect">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
