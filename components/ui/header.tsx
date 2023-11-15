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
                  height={80}
                  width={80}
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
              <li>
                <a href="https://api.whatsapp.com/send?phone=527681040289&text=Hola%2C%20estoy%20interesado%20en%20un%20par%20de%20zapatos" target="_blank" rel="noopener noreferrer"
                   title="WhatsApp" className="px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                       strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8"
                       viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1a5 5 0 005 5h1a.5.5 0 000-1h-1a.5.5 0 000 1"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
