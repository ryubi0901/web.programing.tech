import { ReactNode } from 'react'

import { Header } from '../Header'

export type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main id="main" tabIndex={-1}>
      {children}
    </main>
  </>
  // {/* <Footer /> */}
)

export default Layout
