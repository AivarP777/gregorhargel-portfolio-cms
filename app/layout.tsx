import './globals.css'
import Header from '../public/components/Header'
import Footer from '../public/components/Footer'
import { IBM_Plex_Mono, Archivo } from 'next/font/google'

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  display: 'swap',
  variable: '--font-ibm',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['200', '400', '700', '800'],
  display: 'swap',
  variable: '--font-archivo',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${IBMPlexMono.variable} ${archivo.variable}`}>
      <body className="font-[var(--font-ibm)] bg-[#F5F5F1] text-black">
        <Header />
        <main className="pt-[134px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
