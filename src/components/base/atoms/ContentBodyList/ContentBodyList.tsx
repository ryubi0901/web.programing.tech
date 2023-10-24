import clsx from 'clsx'
import Image from 'next/image'

import { Article } from '~/src/types/articles'

import { RichEdit } from '../RichEdit'

type Props = {
  body: Article['body']
}

const ContentBodyList = ({ body }: Props) => {
  return (
    <div className="mt-7 space-y-7">
      {body.map((field) => {
        switch (field.fieldId) {
          case 'richedit': {
            return <RichEdit body={field.html.replace(/<h4/g, '<h5').replace(/<h3/g, '<h4').replace(/<h2/g, '<h3')} />
          }
          case 'images': {
            return (
              <div className={clsx(field.images.length >= 2 ? 'grid grid-cols-2 gap-8' : 'w-3/5 mx-auto')}>
                {field.images.map(({ url, width, height }) => (
                  <Image key={url} src={url} alt={''} width={width} height={height} />
                ))}
              </div>
            )
          }
          case 'primaryText': {
            return (
              <div className="border-4 border-green-500 rounded-xl p-4">
                <div className="space-y-1" dangerouslySetInnerHTML={{ __html: field.html }} />
              </div>
            )
          }
        }
      })}
    </div>
  )
}

export default ContentBodyList
