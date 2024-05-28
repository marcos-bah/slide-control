import { Rubik } from 'next/font/google'
import { Chivo } from 'next/font/google'
import { ReactNode } from 'react'
import './styles.css'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const chivo = Chivo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-chivo',
})

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={rubik.variable + ' ' + chivo.variable}>
                {children}
            </body>
        </html>
    )
}