import { useRouter } from "next/router"
import React from "react"
import { NavLink } from "../components/NavLink"

export const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className="bg-white shadow flex justify-between h-[64px] px-5 py-2 items-center sticky top-0 w-full transition-all z-10">
      <nav className="list-none flex flex-col md:flex-row  column">
        <li className="px-2">
          <NavLink activeClassName="focus" passHref href="/">
            <button className="button-minimal border-b-0 is-primary">
              Home
            </button>
          </NavLink>
          <NavLink activeClassName="focus" passHref href="/Add">
            <button className="button-minimal border-b-0 is-primary">
              Add Card
            </button>
          </NavLink>
        </li>
      </nav>
    </header>
  )
}
