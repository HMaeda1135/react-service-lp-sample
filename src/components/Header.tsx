const navItems = [
  { href: '#problems', label: '悩み' },
  { href: '#services', label: 'サービス' },
  { href: '#pricing', label: '料金' },
  { href: '#faq', label: 'FAQ' },
] as const

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          まなびスタート
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
