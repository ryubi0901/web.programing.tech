import { MicroCMSQueries } from 'microcms-js-sdk'

import { Article } from '~/src/types/articles'

import { apiClient } from './apiClient'

export const getArticles = (queries?: MicroCMSQueries) => apiClient.getList<Article>({ endpoint: 'articles', queries })
export const getArticle = (queries?: MicroCMSQueries) => (contentId: string) =>
  apiClient.getListDetail<Article>({ endpoint: 'articles', contentId, queries })
