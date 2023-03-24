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
        url: 'https://nextjs.org/og.pnghttps://i1-vnexpress.vnecdn.net/2016/06/21/Brabus-850-60-Cabrio-S63-4-5460-1466477030.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=UVhpAXhb_K3cYBbjPJkyRw',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i1-vnexpress.vnecdn.net/2016/06/21/Brabus-850-60-Cabrio-S63-4-5460-1466477030.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=UVhpAXhb_K3cYBbjPJkyRw',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
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
