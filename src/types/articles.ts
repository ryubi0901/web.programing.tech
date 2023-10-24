import { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

type Richedit = {
  fieldId: 'richedit'
  html: string
}

type Images = {
  fieldId: 'images'
  images: MicroCMSImage[]
}

type PrimaryText = {
  fieldId: 'primaryText'
  html: string
}

type Body = (Richedit | Images | PrimaryText)[]

export type Article = {
  title: string
  body: Body
} & MicroCMSListContent
