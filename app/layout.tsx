import '~/src/styles/index.css'
import 'scroll-behavior-polyfill'
import 'focus-visible'
import { Metadata } from 'next'
import { Noto_Serif_JP, Lato } from 'next/font/google'
import { ReactNode, Suspense } from 'react'

import { PageBetweenFocus } from '~/src/components/base/molecules/PageBetweenFocus'
// import { PageView } from '~/src/components/base/molecules/PageView'
import { WindowNarrow } from '~/src/components/base/molecules/WindowNarrow'
import { Layout } from '~/src/components/layout/Layout'

const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto',
})

const lato = Lato({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: {
    default: 'Webプログラミング資料',
    template: '%s | Webプログラミング資料',
  },
  description: 'Webの構築に必要なコーディング、プログラミングを学ぶための資料です。',
  openGraph: {
    title: '',
    description: '',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJp.variable} ${lato.variable} font-sans leading-loose tracking-3xl text-black`}>
        <Layout>{children}</Layout>

        <WindowNarrow />
        <Suspense fallback={null}>
          <PageBetweenFocus />
        </Suspense>

        {/* Google Analytics を使うとき */}
        {/* <Suspense fallback={false}>
          <PageView />
        </Suspense> */}
      </body>
    </html>
  )
}
