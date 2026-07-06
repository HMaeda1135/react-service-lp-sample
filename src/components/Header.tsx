import { navItems, siteConfig } from '../data/lpContent'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          {siteConfig.brandName}
        </a>
        <nav className="nav" aria-label="ページ内ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
