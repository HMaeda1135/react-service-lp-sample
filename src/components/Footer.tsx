import { siteConfig } from '../data/lpContent'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-copy">{siteConfig.footerCopy}</p>
        <p className="footer-note">{siteConfig.footerNote}</p>
      </div>
    </footer>
  )
}

export default Footer
