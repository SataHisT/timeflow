import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        {/*<Header />*/}
        {children}
      </body>
    </html>
  )
}
