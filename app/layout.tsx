import './globals.css'
import Header from '../public/components/Header'
import { Archivo } from 'next/font/google'
import Footer from '../public/components/Footer'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['200','400','700','800'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-[#F5F5F1] text-black`}>
        <Header />
        <main className="pt-[134px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
