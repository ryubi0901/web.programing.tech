import { MicroCMSQueries } from 'microcms-js-sdk'

import { Article } from '~/src/types/articles'
import { Settings } from '~/src/types/settings'

import { apiClient } from './apiClient'

export const getArticles = (queries?: MicroCMSQueries) =>
  apiClient.getList<Article>({ customRequestInit: { cache: 'no-store' }, endpoint: 'articles', queries })
export const getArticle = (queries?: MicroCMSQueries) => (contentId: string) =>
  apiClient.getListDetail<Article>({
    customRequestInit: { cache: 'no-store' },
    endpoint: 'articles',
    contentId,
    queries,
  })
export const getSettings = (queries?: MicroCMSQueries) =>
  apiClient.getObject<Settings>({ customRequestInit: { cache: 'no-store' }, endpoint: 'settings', queries })
