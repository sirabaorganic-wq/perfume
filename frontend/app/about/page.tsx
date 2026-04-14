import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-card border-b border-border">
          <div className="section-container text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-balance">
              {content.aboutPage.hero.heading}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.aboutPage.hero.subheading}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 lg:py-24">
          <div className="section-container max-w-3xl">
            <div className="space-y-16">
              {content.aboutPage.sections.map((section, idx) => (
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-card border-t border-border">
          <div className="section-container text-center">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">
              Ready to Discover Your Signature Scent?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our collection of fragrances designed by energy and engineered for your climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all"
              >
                Shop Now
              </Link>
              <Link
                href="/philosophy"
                className="px-6 py-3 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
