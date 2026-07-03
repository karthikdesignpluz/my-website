import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import MobileMenu from './MobileMenu'

async function getSettings() {
  const settings = await client.fetch(
    `*[_type == "settings"][0]`
  )
  console.log('Settings fetched:', settings)
  return settings
}

async function getNavigation() {
  const navigation = await client.fetch(
    `*[_type == "navigation" && title == "Main Navigation"][0] {
      menuItems | order(order asc)
    }`
  )
  console.log('Navigation fetched:', navigation)
  return navigation
}

export default async function Header() {
  const settings = await getSettings()
  const navigation = await getNavigation()

  const logoUrl = settings?.logo ? urlFor(settings.logo).url() : null
  const menuItems = navigation?.menuItems || []

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href={settings?.logoUrl || '/'}
          className="flex items-center gap-2 flex-shrink-0"
        >
          {logoUrl ? (
            <div className="relative w-12 h-12">
              <Image
                src={logoUrl}
                alt={settings?.logoAlt || settings?.siteName || 'Logo'}
                fill
                className="object-contain"
                priority
              />
            </div>
          ) : null}
          <span className="font-semibold text-lg text-slate-900 hidden sm:inline">
            {settings?.siteName || 'My Site'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex text-sm text-slate-700">
          {menuItems.map((item: any) => (
            <Link
              key={item._key}
              href={item.url}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <MobileMenu menuItems={menuItems} />
      </div>
    </header>
  )
}
