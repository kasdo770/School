import './globals.css'
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export const metadata = {
  title: 'Schoola',
  description: 'Easier School system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
