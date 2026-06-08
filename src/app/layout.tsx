import Providers from './providers'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'IT-Підтримка для дому та бізнесу',
   icons: {
    icon: '/U.png',
  },
  description: 'Налаштування мереж, серверів, робочих станцій та офісної техніки. Швидке вирішення IT-проблем, профілактика збоїв та технічна підтримка для компаній і приватних клієнтів.',
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
