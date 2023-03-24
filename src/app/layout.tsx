import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ví dụ về SEO in Nextjs 13',
  description:
    'Sau đây tôi xin hướng dẫn các bạn về SEO trên phiên bản next js mới , bạn click vào đây nhé ...',
  openGraph: {
    title: 'Ví dụ về SEO in Nextjs 13',
    description:
      'Sau đây tôi xin hướng dẫn các bạn về SEO trên phiên bản next js mới , bạn click vào đây nhé ...',
    url: 'https://my-seo-nextjs.vercel.app/',
    images: [
      {
        url: 'https://tapchigiaothong.qltns.mediacdn.vn/zoom/686_429/tapchigiaothong.vn/files/duc.anh/2015/07/15/mercedes-s63-amg-3-1545.jpg',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
