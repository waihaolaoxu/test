import { Navigation } from '@/app/ui/Navigation';
import { getText } from "@/app/lang"
export const metadata = {
  title: getText("title"),
  description: getText("description"),
  keywords: getText("keywords")
}
import './globals.scss'
import styles from './globals.module.scss'

export default function RootLayout({ children }) {
  const navLinks = [
    {
      name: getText("nav_index"),
      href: '/',
    },
    {
      name: getText("nav_about"),
      href: '/about',
    },
  ]
  return (
    <html lang={'zh-' + process.env.lang}>
      <body>
        <Navigation navLinks={navLinks} />
        {children}
        <footer className={styles.footer}>
          <span>©️ eco-service.ltd</span>
          <span className='ml20 mr5'>e-mail:</span>
          <a href="mailto:zimuhu.manager@eco-service.ltd">zimuhu.manager@eco-service.ltd</a>
        </footer>
      </body>
    </html>
  )
}
