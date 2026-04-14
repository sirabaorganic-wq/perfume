import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="section-container max-w-3xl">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border mb-12">
            {['Privacy', 'Terms', 'Refund'].map((tab) => (
              <button
                key={tab}
                className="px-4 py-3 text-sm font-medium border-b-2 border-primary text-primary"
              >
                {tab} Policy
              </button>
            ))}
          </div>

          {/* Privacy Policy */}
          <section className="mb-16 space-y-6">
            <div>
              <h1 className="font-serif font-bold text-4xl mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>

            <div className="space-y-4">
            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aphrodite Nefertum™ ("we", "us", "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect several different types of information for various purposes to provide and improve our service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data: Name, email address, phone number, address</li>
                <li>Usage Data: Information about your interaction with our service</li>
                <li>Cookies: Small data files stored on your device</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at hello@aphrodite-nefertum.com.
              </p>
            </div>
          </div>
          </section>

          {/* Terms of Service */}
          <section className="mb-16 space-y-6">
          <div>
            <h1 className="font-serif font-bold text-4xl mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on Aphrodite Nefertum™'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Aphrodite Nefertum™'s website are provided on an 'as is' basis. Aphrodite Nefertum™ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Aphrodite Nefertum™ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aphrodite Nefertum™'s website.
              </p>
            </div>
          </div>
          </section>

          {/* Refund Policy */}
          <section className="mb-16 space-y-6">
          <div>
            <h1 className="font-serif font-bold text-4xl mb-4">Refund & Return Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">30-Day Return Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Aphrodite Nefertum™, we stand behind the quality of our fragrances. If you are not completely satisfied with your purchase, we offer a 30-day return and refund guarantee.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Return Conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To be eligible for a return:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The product must be unused and in its original packaging</li>
                <li>The return must be initiated within 30 days of purchase</li>
                <li>A valid proof of purchase must be provided</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                To initiate a return:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact us at hello@aphrodite-nefertum.com with your order number</li>
                <li>We will provide you with return shipping instructions</li>
                <li>Send the product back to us in its original packaging</li>
                <li>Once received and inspected, we will process your refund within 5-7 business days</li>
              </ol>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Exceptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that opened or used products, or products damaged due to misuse, are not eligible for refund. Shipping costs are non-refundable unless the return is due to our error.
              </p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-2xl mb-3">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our refund policy, please contact us at hello@aphrodite-nefertum.com.
              </p>
            </div>
          </div>
          </section>

          {/* Back to Shop */}
          <div className="text-center pt-8 border-t border-border">
            <Link
              href="/shop"
              className="text-primary font-bold hover:underline"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
