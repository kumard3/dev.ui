import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  title: string
  urlTitle: string
  url: string
  length: number
}

export const Componentbutton = ({ title, url, urlTitle, length }: Props) => {
  const router = useRouter()

  return (
    <Link href={`${url}${urlTitle}`} passHref>
      <button
        className={`${
          router.asPath == `${url}${urlTitle}` ? 'bg-white/10 backdrop-blur-sm' : ' text-[#999999] '
        } py-2 px-4 shadow  text-left active: text-lg w-full rounded flex hover:bg-white/10 hover:backdrop-blur-sm items-center`}
      >
        <span
          className={`${
            router.asPath == `${url}${title}` ? 'bg-white' : 'bg-slate-500'
          } min-w-[4px] min-h-[4px] block rounded-[50%] mr-3 `}
        ></span>
        <div className="flex justify-between w-full outerSans">
          {title}
          <span className="text-right ">{length}</span>
        </div>
      </button>
    </Link>
  )
}
