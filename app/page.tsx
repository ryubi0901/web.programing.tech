import Image from 'next/image'
import Link from 'next/link'

import iconExternal from '~/src/images/icon_external.svg'
import { getArticles, getSettings } from '~/src/utils/cms/getContents'

export default async function IndexPage() {
  const { contents: articles } = await getArticles()
  const settings = await getSettings()

  return (
    <div className="w-11/12 mx-auto mt-20 grid grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold">勉強内容</h2>
        <ol className="mt-8 space-y-3 list-decimal list-inside ml-5">
          {articles.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/${id}`} className="text-red-400 font-bold hover:opacity-50 duration-300">
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2 className="text-2xl font-bold">参考サイト</h2>
        <ul className="mt-8 space-y-3 list-disc list-inside ml-5">
          {settings.referenceSites.map(({ url, text }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-bold inline-flex items-center space-x-2 hover:opacity-50 duration-300"
              >
                <span>{text}</span>
                <span>
                  <Image src={iconExternal} alt={''} width={14} height={14} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
