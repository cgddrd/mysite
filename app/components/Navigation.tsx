import Link from 'next/link'
import NavLinks from './NavLinks'
import ScrollProgress from './ScrollProgress'

export default function Navigation() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner container">
        <Link href="/" className="site-nav__wordmark">
          Jeremy Davidson
        </Link>
        <NavLinks />
      </div>
      <ScrollProgress />
    </nav>
  )
}
