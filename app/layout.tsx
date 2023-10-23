import '~/src/styles/index.css'
import 'scroll-behavior-polyfill'
import 'focus-visible'
import { ReactNode, Suspense } from 'react'

import { PageBetweenFocus } from '~/src/components/base/molecules/PageBetweenFocus'
// import { PageView } from '~/src/components/base/molecules/PageView'
import { WindowNarrow } from '~/src/components/base/molecules/WindowNarrow'
import { Layout } from '~/src/components/layout/Layout'

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans leading-normal text-black">
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
