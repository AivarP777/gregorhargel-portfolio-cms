'use client'

import { useEffect, useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className="bg-[#F5F5F1] min-h-screen">
      <section
        className="
          px-[24px] sm:px-[60px] md:px-[100px]
          pt-[40px] sm:pt-[60px] md:pt-[70px]
          pb-[100px] sm:pb-[160px] md:pb-[200px]
        "
      >
        {/* Pealkiri */}
        <h1
          className={`
            font-[Archivo] font-extrabold uppercase text-[#29282D]
            text-[48px] sm:text-[90px] md:text-[130px] lg:text-[185px]
            leading-[1.08]
            text-center md:text-left

            transition-all duration-700 ease-out transform
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
          `}
        >
          CONTACT
        </h1>

        {/* Alamtekst */}
        <p
          className={`
            mt-[24px] sm:mt-[32px] md:mt-[40px]
            max-w-[940px]
            font-[Archivo] font-extralight text-[#29282D]
            text-[16px] sm:text-[22px] md:text-[28px] lg:text-[40px]
            leading-[1.4]
            text-center md:text-left
            px-[4px] sm:px-0

            transition-all duration-700 ease-out transform
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ transitionDelay: '120ms' }}
        >
          Let’s collaborate — I’m open to editing projects, creative partnerships,
          and inquiries.
        </p>

        {/* Vorm ja kontaktinfo */}
        <div
          className="
            mt-[60px] sm:mt-[80px] md:mt-[100px]
            grid grid-cols-1 lg:grid-cols-12 gap-[60px] md:gap-[80px]
          "
        >
          {/* Vorm */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form
              className="max-w-[700px] mx-auto lg:mx-0 space-y-10"
              onSubmit={async (e) => {
                e.preventDefault()
                setStatus('sending')
                setErrorMsg(null)

                const form = e.currentTarget as HTMLFormElement
                const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim()
                const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim()
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim()

                // Basic client-side sanity checks
                if (!name || !email || !message) {
                  setStatus('error')
                  setErrorMsg('Please fill in all fields.')
                  return
                }

                try {
                  const res = await fetch('/api/contacts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                  })

                  const data = await res.json().catch(() => ({}))

                  if (res.ok && (data?.ok ?? true)) {
                    setStatus('sent')
                    form.reset()
                  } else {
                    setStatus('error')
                    setErrorMsg(data?.error || 'Send failed. Please try again.')
                  }
                } catch {
                  setStatus('error')
                  setErrorMsg('Unexpected error. Please try again.')
                }
              }}
            >
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border-b border-[#29282D] bg-transparent py-4 text-[18px] sm:text-[20px] 
                             outline-none placeholder:text-[#29282D]/50 text-[#29282D] caret-[#29282D]"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border-b border-[#29282D] bg-transparent py-4 text-[18px] sm:text-[20px] 
                             outline-none placeholder:text-[#29282D]/50 text-[#29282D] caret-[#29282D]"
                  aria-label="Your Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full border-b border-[#29282D] bg-transparent py-4 text-[18px] sm:text-[20px] h-[150px] 
                             resize-none outline-none placeholder:text-[#29282D]/50 text-[#29282D] caret-[#29282D]"
                  aria-label="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  inline-flex h-[52px] sm:h-[56px] items-center justify-center
                  border border-[#29282D] bg-[#F5F6F1] px-8 sm:px-10
                  text-[#29282D] font-extralight text-[15px] sm:text-[16px] uppercase leading-none
                  transition-all duration-300 ease-in-out
                  hover:bg-[#29282D] hover:text-[#F5F6F1]
                  active:scale-[0.98]
                  cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Success / Error state */}
              {status === 'sent' && (
                <p className="text-green-700 text-sm sm:text-base">
                  Thanks! A confirmation email has been sent to your inbox.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm sm:text-base">
                  {errorMsg || 'Something went wrong.'}
                </p>
              )}
            </form>
          </div>

          {/* Kontaktinfo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-8 mt-[60px] lg:mt-0 text-center lg:text-left">
              <div>
                <h2 className="font-[Archivo] uppercase text-[#29282D] text-[14px] sm:text-[16px] tracking-wide">
                  Email
                </h2>
                <a
                  href="mailto:hello@gregorhargel.com"
                  className="
                    block mt-2 text-[#29282D]
                    text-[20px] sm:text-[22px] lg:text-[28px]
                    underline-offset-4 hover:underline
                  "
                >
                  Hargel73@gmail.com
                </a>
              </div>

              <div>
                <h2 className="font-[Archivo] uppercase text-[#29282D] text-[14px] sm:text-[16px] tracking-wide">
                  Based in
                </h2>
                <p className="mt-2 text-[#29282D] text-[20px] sm:text-[22px] lg:text-[28px]">
                  Bali, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
