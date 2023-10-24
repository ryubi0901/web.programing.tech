import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContentBodyList } from '~/src/components/base/atoms/ContentBodyList'
import { getArticle, getArticles } from '~/src/utils/cms/getContents'

export const revalidate = 60 * 3

export async function generateStaticParams() {
  const { contents: articles } = await getArticles()
  return articles.map(({ id }) => ({
    pageId: id,
  }))
}

export async function generateMetadata({ params }: { params: { pageId: string } }): Promise<Metadata> {
  const article = await getArticle()(params.pageId)

  return {
    title: article.title,
  }
}

export default async function ArticlePage({ params }: { params: { pageId: string } }) {
  const article = await getArticle()(params.pageId)

  if (!article) {
    notFound()
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-2xl font-bold text-green-500">{article.title}</h2>
      <ContentBodyList body={article.body} />
      <div className="text-center mt-10">
        <Link href={'/'} className="text-red-400 hover:opacity-50 duration-300 font-english font-bold text-xl">
          ← Back
        </Link>
      </div>
    </div>
  )
}
