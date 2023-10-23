'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const usePageBetweenFocus = () => {
  const pathname = usePathname()

  useEffect(() => {
    const main = document.getElementById('mail')
    main?.focus()
  }, [pathname])
}

const PageBetweenFocus = () => {
  usePageBetweenFocus()

  return null
}

export default PageBetweenFocus
