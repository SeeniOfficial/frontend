import React from 'react'

export const Newsletter = () => {
  return (
    <section className="py-10 px-10 md:px-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">Stay updated with our latest news and offers.</p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded w-full">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
