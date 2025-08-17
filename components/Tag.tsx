import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  className?: string
}


const Tag = ({ text, className = "text-gray-900 dark:text-white hover:text-red-700 dark:hover:text-red-400 mr-3 text-sm font-medium uppercase" }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={className}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
