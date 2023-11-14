import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from "next/image";
import lilajpg from "../../public/images/logo/lila-logo.svg"

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-8">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                  src={lilajpg}
                  alt="Logo Lila"
                  height={105}
                  width={120}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Dama
                </Link>
              </li>
              <li>
                <Link href="/signup" className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Caballero
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
