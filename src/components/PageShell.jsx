import Header from './Header'
import Footer from './Footer'

export default function PageShell({ theme, children }) {
  return (
    <div className={`page theme-${theme}`}>
      <Header theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
