"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">Contact</p>
      <h1 className="mt-2 font-display text-5xl">Get in touch</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone">
        Questions about a piece, a commission, or shipping to your country? Send
        a note and the studio will reply within two business days.
      </p>

      {sent ? (
        <div className="mt-10 border border-white/10 bg-white/[0.02] px-6 py-12 text-center">
          <h2 className="font-display text-3xl">Message sent</h2>
          <p className="mt-3 text-stone">
            Thank you for reaching out — we&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-10 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm text-stone">Name</span>
              <input
                required
                name="name"
                className="w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-stone">Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm text-stone">Subject</span>
            <input
              name="subject"
              className="w-full border border-white/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-stone">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full resize-y border border-white/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      )}

      <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 text-sm sm:grid-cols-3">
        <div>
          <p className="uppercase tracking-widest text-stone">Email</p>
          <p className="mt-1">studio@titan.gallery</p>
        </div>
        <div>
          <p className="uppercase tracking-widest text-stone">Instagram</p>
          <a
            href="https://www.instagram.com/gallerie.titan/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block hover:text-accent"
          >
            @gallerie.titan
          </a>
        </div>
        <div>
          <p className="uppercase tracking-widest text-stone">Studio</p>
          <p className="mt-1">By appointment</p>
        </div>
      </div>
    </section>
  );
}
