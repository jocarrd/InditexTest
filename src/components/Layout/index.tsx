import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner'

type LayoutProps = {
  loading?: boolean
  children: ReactNode
}

export const Layout = ({ loading = false, children }: LayoutProps) => {
  return (
    <>
      <header className="py-4 px-8 flex flex-col gap-2">
        <div className="flex">
          <Link to="/" className="text-blue-700 text-xl">
            Podcaster
          </Link>
          <div className="ml-auto">{loading && <Spinner />}</div>
        </div>

        <hr />
      </header>
      <main className="md:px-6">{children}</main>
    </>
  )
}
