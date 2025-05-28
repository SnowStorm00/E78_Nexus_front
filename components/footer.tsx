import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { title: "Help Center", href: "/help" },
  { title: "AD Privacy Policy", href: "/privacy/ad" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "E78 Contact Us", href: "/contact" },
  { title: "E78 Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="E78 Logo" width={100} height={32} className="h-8 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">© 2024 E78 Partners</p>
        </div>
      </div>
    </footer>
  )
}
