import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'COMPANY BOARD',
  description: '가볍고 빠른 공연 제작 운영판',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
