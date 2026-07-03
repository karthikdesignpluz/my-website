import { client } from '@/sanity/lib/client'

async function getSettings() {
  const settings = await client.fetch(
    `*[_type == "settings"][0]`
  )
  return settings
}

export default async function Footer() {
  const settings = await getSettings()
  const currentYear = new Date().getFullYear()
  const footerText = settings?.footerText || `© ${currentYear} ${settings?.siteName || 'My Site'}. All rights reserved.`

  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="container py-6 text-sm text-slate-500">
        {footerText}
      </div>
    </footer>
  )
}
