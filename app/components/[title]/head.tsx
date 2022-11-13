'use client'
import { usePathname } from 'next/navigation';


export default function head() {
  const pathname = usePathname();
  return (
    <>
      <title>{`Dev ui | ${pathname?.slice(12)}`}</title>
    </>
  )
}
