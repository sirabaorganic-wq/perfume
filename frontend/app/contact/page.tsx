'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-card border-b border-border">
          <div className="section-container text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-balance">
              {content.contactPage.heading}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.contactPage.subheading}
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24">
          <div className="section-container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif font-bold text-2xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground">
                    {content.contactPage.contactInfo.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium text-foreground">
                    {content.contactPage.contactInfo.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium text-foreground">
                    {content.contactPage.contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.contactPage.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.contactPage.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={content.contactPage.form.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content.contactPage.form.messagePlaceholder}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:shadow-lg gold-glow transition-all"
                >
                  {submitted ? '✓ Message Sent' : content.contactPage.form.submitButton}
                </button>
              </form>
            </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="section-container max-w-3xl">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-center mb-12">
              {content.contactPage.faqHeading}
            </h2>
            <div className="space-y-6">
              {content.contactPage.faqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="cursor-pointer flex items-center justify-between p-4 bg-background rounded-sm border border-border hover-glow transition-all">
                    <h3 className="font-bold text-foreground">{faq.question}</h3>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="p-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
