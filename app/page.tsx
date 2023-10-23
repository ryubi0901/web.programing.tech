import { Metadata } from 'next'
import Image from 'next/image'

import img from '~/src/images/sample.png'

export const metadata: Metadata = {
  //metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}`),
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function IndexPage() {
  return (
    <div className="w-full">
      <div className="h-screen">
        <Image src={img} sizes="100vw" alt={''} />
      </div>
    </div>
  )
}
