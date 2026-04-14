import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'
import Link from 'next/link'

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-card border-b border-border">
          <div className="section-container text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-balance">
              {content.philosophyPage.hero.heading}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.philosophyPage.hero.subheading}
            </p>
          </div>
        </section>

        {/* Philosophy Sections */}
        <section className="py-16 lg:py-24">
          <div className="section-container max-w-3xl">
            <div className="space-y-16">
              {content.philosophyPage.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6 text-balance">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Framework Visual */}
        <section className="py-16 lg:py-24 bg-card border-t border-border">
          <div className="section-container">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center mb-12">
              The Four Energies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Power', desc: 'Authority. Confidence. Command.' },
                { name: 'Desire', desc: 'Passion. Elegance. Presence.' },
                { name: 'Charm', desc: 'Freshness. Grace. Approachable Luxury.' },
                { name: 'Presence', desc: 'Confidence. Assurance. Lasting Impact.' },
              ].map((energy, idx) => (
                <div key={idx} className="p-6 bg-background rounded-sm border border-border text-center hover-glow transition-all">
                  <h3 className="font-serif font-bold text-xl text-primary mb-3">
                    {energy.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {energy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="section-container text-center">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">
              Find Your Energy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our collection and discover the fragrance that matches your energy.
            </p>
            <Link
              href="/shop"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all inline-block"
            >
              Shop Collection
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
