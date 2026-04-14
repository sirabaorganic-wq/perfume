import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getProductBySlug, products } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.nameWithTM} | Aphrodite Nefertum™`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        {/* Hero & Details Section */}
        <div className="section-container mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.nameWithTM}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
                  {product.energy} Energy
                </p>
                <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-3">
                  {product.nameWithTM}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Notes */}
              <div className="space-y-4 bg-card p-6 rounded-sm border border-border">
                <div>
                  <p className="text-sm font-bold text-primary mb-2">TOP NOTES</p>
                  <p className="text-muted-foreground">
                    {product.notes.top.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-2">HEART NOTES</p>
                  <p className="text-muted-foreground">
                    {product.notes.heart.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-2">BASE NOTES</p>
                  <p className="text-muted-foreground">
                    {product.notes.base.join(', ')}
                  </p>
                </div>
              </div>

              {/* Performance */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-sm border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    Longevity
                  </p>
                  <p className="font-bold text-primary text-lg">{product.longevity}</p>
                </div>
                <div className="bg-card p-4 rounded-sm border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    Projection
                  </p>
                  <p className="font-bold text-primary text-lg">{product.projection}</p>
                </div>
              </div>

              {/* Climate Info */}
              {product.climateOptimized && (
                <div className="bg-card p-4 rounded-sm border border-primary">
                  <p className="text-sm text-primary font-bold">
                    ✓ Engineered for Indian Climate
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Optimized for heat, humidity, and lasting performance.
                  </p>
                </div>
              )}

              {/* Price & Sizes */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-primary mb-3">SELECT SIZE</p>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(product.prices).map(([size, price]) => (
                      <button
                        key={size}
                        className="px-4 py-3 border border-border rounded hover:border-primary hover:bg-primary/10 transition-all text-center"
                      >
                        <p className="font-bold text-sm">{size}</p>
                        <p className="text-xs text-muted-foreground">
                          ₹{price.toLocaleString('en-IN')}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover-lift hover-glow transition-all flex-1">
                  Add to Cart
                </button>
                <button className="px-6 py-3 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all">
                  Wishlist
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-card">
            <div className="section-container">
              <div className="mb-12">
                <h2 className="font-serif font-bold text-3xl sm:text-4xl">
                  Explore More Fragrances
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, idx) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
