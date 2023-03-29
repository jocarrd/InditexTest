import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <header className="py-4 px-8 flex flex-col gap-2">
        <div className="flex">
          <Link to="/" className="text-blue-700 text-xl">
            Podcaster
          </Link>
        </div>
        <hr />
      </header>
      <main className="md:px-6">
        <Outlet />
      </main>
    </>
  )
}
