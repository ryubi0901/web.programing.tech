import clsx from 'clsx'

type Props = {
  body: string
  className?: string
}

const RichEdit = ({ body, className }: Props) => {
  return <div className={clsx(className)} dangerouslySetInnerHTML={{ __html: body }} />
}

export default RichEdit
