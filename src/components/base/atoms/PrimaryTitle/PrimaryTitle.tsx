import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, createElement } from 'react'

type Props = {
  title: string
  as?: keyof JSX.IntrinsicElements
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const PrimaryTitle = ({ title, as = 'h1', className, ...props }: Props) => {
  return createElement(as, { className: clsx(className, 'text-lg lg:text-xl'), ...props }, title)
}

export default PrimaryTitle
