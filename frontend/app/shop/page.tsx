'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [genderFilter, setGenderFilter] = useState<string>('all')
  const [regionFilter, setRegionFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('featured')

  const filteredProducts = products.filter((p) => {
    const genderMatch = genderFilter === 'all' || p.gender === genderFilter
    const regionMatch = regionFilter === 'all' || p.region === regionFilter
    return genderMatch && regionMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return b.featured ? 1 : -1
    }
    if (sortBy === 'price-low') {
      const minA = Math.min(...Object.values(a.prices))
      const minB = Math.min(...Object.values(b.prices))
      return minA - minB
    }
    if (sortBy === 'price-high') {
      const minA = Math.min(...Object.values(a.prices))
      const minB = Math.min(...Object.values(b.prices))
      return minB - minA
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="section-container">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-3">
              Our Collection
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover fragrances designed by energy and engineered for your climate.
            </p>
          </div>

          {/* Filters & Sorting */}
          <div className="mb-12 p-6 bg-card rounded-sm border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Gender Filter */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Gender
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-input border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Genders</option>
                  <option value="Male">Masculine</option>
                  <option value="Female">Feminine</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Collection
                </label>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-input border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Collections</option>
                  <option value="Global">Global Luxury</option>
                  <option value="India Core">India Core</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-input border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <p className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} of {products.length} fragrances
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sortedProducts.map((product, idx) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No fragrances match your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
