"use client"
import './globals.css'
import { SnackbarProvider } from 'notistack'

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <SnackbarProvider>
          {children}
        </SnackbarProvider>
      </body>
    </html>
  )
}
