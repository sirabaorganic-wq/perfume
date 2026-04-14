import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'featured'
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Link href={`/products/${product.slug}`}>
      <div className={`group cursor-pointer hover-lift transition-all duration-300 ${isFeatured ? 'col-span-2' : ''}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden bg-parchment rounded-none mb-4 aspect-square border border-border">
          <Image
            src={product.image}
            alt={product.nameWithTM}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            sizes={isFeatured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.new && (
              <span className="px-2 py-1 bg-white border border-[#D8CCBC] text-[#221D18] text-xs font-bold rounded-none">
                New
              </span>
            )}
            {product.bestSeller && (
              <span className="px-2 py-1 bg-[#BC995B] text-white text-xs font-bold rounded-none">
                Best Seller
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={isFeatured ? 'mb-4' : ''}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-[#BC995B] text-xs font-bold uppercase tracking-widest">
                {product.energy}
              </p>
              <h3 className="font-serif font-bold text-[#221D18] group-hover:text-[#6B4A32] transition-colors">
                {product.name}
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-3">
            {product.tagline}
          </p>

          {isFeatured && (
            <p className="text-sm text-foreground mb-4 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Price & Sizes */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">
              From ₹{Math.min(...Object.values(product.prices)).toLocaleString('en-IN')}
            </p>
            <span className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-[#5F564B] bg-[#ECE4D8] px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
