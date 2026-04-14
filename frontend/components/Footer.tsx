'use client'

import Link from 'next/link'
import Image from 'next/image'
import { content } from '@/lib/content'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-[#3F4638] text-[#F4EFE7] border-t-0">
      <div className="section-container py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-[rgba(244,239,231,0.1)]">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-lotus.png"
                alt="Aphrodite Nefertum"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-serif font-bold text-[#BC995B] text-sm">APHRODITE NEFERTUM™</span>
            </div>
            <p className="text-sm text-[rgba(244,239,231,0.7)]">
              {content.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-[#F4EFE7] mb-4 text-sm">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm text-[rgba(244,239,231,0.7)] hover:text-[#BC995B] transition-colors">
                  {content.footer.links.shop}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[rgba(244,239,231,0.7)] hover:text-[#BC995B] transition-colors">
                  {content.footer.links.about}
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-sm text-[rgba(244,239,231,0.7)] hover:text-[#BC995B] transition-colors">
                  {content.footer.links.philosophy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-bold text-[#F4EFE7] mb-4 text-sm">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-[rgba(244,239,231,0.7)] hover:text-[#BC995B] transition-colors">
                  {content.footer.links.contact}
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-sm text-[rgba(244,239,231,0.7)] hover:text-[#BC995B] transition-colors">
                  {content.footer.links.policy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-[#F4EFE7] mb-4 text-sm">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={content.footer.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-3 py-2.5 bg-[rgba(244,239,231,0.05)] border border-[rgba(244,239,231,0.2)] text-sm text-[#F4EFE7] placeholder-[rgba(244,239,231,0.5)] focus:outline-none focus:border-[#BC995B]"
              />
              <button
                type="submit"
                className="px-3 py-2.5 bg-[#BC995B] text-white text-sm font-medium hover:bg-[#9E8123] transition-colors"
              >
                {subscribed ? '✓ Subscribed' : content.footer.newsletter.button}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[rgba(244,239,231,0.5)]">
          <p>{content.footer.copyrightText}</p>
          <p>{content.footer.trademarkedText}</p>
        </div>
      </div>
    </footer>
  )
}
