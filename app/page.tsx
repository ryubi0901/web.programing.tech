import Link from 'next/link'

import { getArticles } from '~/src/utils/cms/getContents'

export default async function IndexPage() {
  const { contents: articles } = await getArticles()

  return (
    <div className="w-11/12 mx-auto mt-10">
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
  )
}
