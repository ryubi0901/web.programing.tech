import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  width: number
  height: number
  alt: string
}

const Img = ({decoding = 'async', ...props}: Props) => {
    return <img {...props} alt={props.alt} decoding={decoding} />
}

export default Img