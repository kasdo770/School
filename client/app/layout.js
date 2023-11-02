import './globals.css'


export const metadata = {
  title: 'Schoola',
  description: 'Easier School system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  )
}
