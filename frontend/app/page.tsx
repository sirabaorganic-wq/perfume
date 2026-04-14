import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ParallaxImage from '@/components/ParallaxImage'
import { products, getFeaturedProducts, getBestSellers } from '@/lib/products'
import { content } from '@/lib/content'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featured = getFeaturedProducts()
  const allProducts = products

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* 1. Hero Section — Cinematic Luxury with Full-Screen Video BG */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/perfumevideo1.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Centered Content */}
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="stagger-children">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance text-white">
              {content.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 mt-4">
              {content.hero.subheading}
            </p>
          </div>
          <Link
            href={`/products/${featured[0]?.slug || 'nefertum-no-8'}`}
            className="mt-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all"
          >
            {content.hero.cta}
          </Link>
        </div>
      </section>

      {/* 2. Brand Story — Editorial */}
      <section className="py-24 lg:py-32 bg-parchment">

        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              {content.brandStory.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {content.brandStory.body}
            </p>
          </div>
        </div>

      </section>

      {/* 3. Signature Collection Grid — Curated */}
      <section className="py-24 lg:py-32 bg-champagne">
        <div className="section-container">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center gap-4">
            Our Signature Collection
          </h2>

          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.map((product, idx) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Differentiator Section — Premium Proof */}
      <section className="py-24 lg:py-32 bg-parchment">
        <div className="section-container">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center">
            {content.differentiator.heading}
          </h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Why Aphrodite Nefertum™ is crafted differently for real-world performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.differentiator.points.map((point, idx) => (
              <div key={idx} className="p-6 bg-background rounded-sm border border-border hover-glow transition-all">
                <h3 className="font-serif font-bold text-lg mb-3 text-primary">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Nefertum No. 8 Spotlight — Fixed Layout */}
      <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">

        {featured[0] && (
          <div className="section-container relative z-10">
            <div className="flex flex-col items-center gap-10">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <Image
                  src={featured[0].image}
                  alt={featured[0].nameWithTM}
                  width={280}
                  height={380}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  {featured[0].energy}
                </p>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
                  {featured[0].nameWithTM}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featured[0].description}
                </p>

                {/* Notes */}
                <div className="mb-8 space-y-3">
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">Top Notes</p>
                    <p className="text-muted-foreground text-sm">
                      {featured[0].notes.top.join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">Heart Notes</p>
                    <p className="text-muted-foreground text-sm">
                      {featured[0].notes.heart.join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">Base Notes</p>
                    <p className="text-muted-foreground text-sm">
                      {featured[0].notes.base.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="flex gap-8 justify-center mb-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Longevity
                    </p>
                    <p className="font-bold text-primary">{featured[0].longevity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Projection
                    </p>
                    <p className="font-bold text-primary">{featured[0].projection}</p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/products/${featured[0].slug}`}
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all inline-block"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. Find Your Number — Energy Framework (Mystical, Restrained) */}
      <section className="py-24 lg:py-32 bg-champagne">
        <div className="section-container">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center">
            {content.energyFramework.heading}
          </h2>
          <br />
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            {content.energyFramework.intro}
          </p>
          <br />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {content.energyFramework.energies.map((energy, idx) => {
              const product = products.find((p) => p.number === energy.productNumber)
              return (
                <div key={idx} className="h-full p-6 bg-background rounded-sm border border-border hover-glow transition-all text-center flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2 text-primary">
                      {energy.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {energy.description}
                    </p>
                  </div>
                  {product && (
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-primary font-bold text-sm hover:underline transition-colors"
                    >
                      {energy.cta} →
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Aphrodite No. 1 Spotlight — Story-Led */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="section-container">
          {products[1] && (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image — centered via flex, intrinsic sizing */}
              <div className="flex items-center justify-center">
                <Image
                  src={products[1].image}
                  alt={products[1].nameWithTM}
                  width={420}
                  height={500}
                  className="object-contain drop-shadow-2xl w-full max-w-sm lg:max-w-md h-auto"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
                  {products[1].energy}
                </p>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
                  {products[1].nameWithTM}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {content.aphroditeSpotlight.tagline}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {content.aphroditeSpotlight.description}
                </p>
                <Link
                  href={`/products/${products[1].slug}`}
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all w-fit inline-block"
                >
                  {content.aphroditeSpotlight.cta}
                </Link>
              </div>
            </div>

          )}
        </div>
      </section>

      {/* 8. India Core Line — Volume Drivers */}
      <section className="py-24 lg:py-32 bg-parchment">
        <div className="section-container">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center">
            {content.indiaCoreSection.heading}
          </h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            {content.indiaCoreSection.description}
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aphrodite No. 3 */}
            {products[2] && (

              <div className="bg-background p-8 rounded-sm border border-border hover-glow transition-all flex flex-col">
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={products[2].image}
                    alt={products[2].nameWithTM}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2">
                  {products[2].name}
                </h3>
                <p className="text-primary text-sm font-bold mb-3">{content.indiaCoreSection.leftProduct.tagline}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {content.indiaCoreSection.leftProduct.description}
                </p>
                <Link
                  href={`/products/${products[2].slug}`}
                  className="text-primary font-bold text-sm hover:underline transition-colors"
                >
                  {content.indiaCoreSection.leftProduct.cta} →
                </Link>
              </div>

            )}

            {/* Nefertum No. 6 */}
            {products[3] && (

              <div className="bg-background p-8 rounded-sm border border-border hover-glow transition-all flex flex-col">
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={products[3].image}
                    alt={products[3].nameWithTM}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2">
                  {products[3].name}
                </h3>
                <p className="text-primary text-sm font-bold mb-3">{content.indiaCoreSection.rightProduct.tagline}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {content.indiaCoreSection.rightProduct.description}
                </p>
                <Link
                  href={`/products/${products[3].slug}`}
                  className="text-primary font-bold text-sm hover:underline transition-colors"
                >
                  {content.indiaCoreSection.rightProduct.cta} →
                </Link>
              </div>

            )}
          </div>
        </div>
      </section>

      {/* 9. Social Proof — Testimonials */}
      <section className="py-24 lg:py-32 bg-champagne">
        <div className="section-container">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center">
            {content.socialProof.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.socialProof.quotes.map((quote, idx) => (
              <div key={idx} className="text-center">
                <br />
                <br />
                <p className="text-lg font-serif italic text-foreground mb-4 leading-relaxed">
                  "{quote.text}"
                </p>
                <p className="text-sm text-muted-foreground">{quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA — Emotional Conclusion */}
      <section className="relative py-24 lg:py-32 bg-olive text-[#F4EFE7] overflow-hidden">

        <div className="section-container text-center relative z-10">

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            {content.finalCTA.heading}
          </h2>
          <p className="text-lg text-[rgba(244,239,231,0.8)] mb-8 max-w-2xl mx-auto">
            {content.finalCTA.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-3 bg-[#BC995B] text-white font-medium rounded hover:bg-[#9E8123] transition-colors"
            >
              {content.finalCTA.ctaPrimary}
            </Link>
            <Link
              href="/philosophy"
              className="px-6 py-3 border border-[#BC995B] text-[#BC995B] font-medium rounded hover:bg-[rgba(188,153,91,0.1)] transition-colors"
            >
              {content.finalCTA.ctaSecondary}
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}