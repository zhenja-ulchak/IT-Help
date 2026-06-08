import Providers from './providers'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Лендінг для продажу',
  description: 'Односторінковий лендінг, який продає',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
