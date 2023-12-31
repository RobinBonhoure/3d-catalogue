import { Poppins } from 'next/font/google'
import Provider from '../components/providers/provider'
import '../style/app.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

export const metadata = {
  title: '3d catalogue',
  description: '3d desk catalogue, customizable model',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
