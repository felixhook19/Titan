import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center">
      <p className="font-display text-7xl">404</p>
      <h1 className="mt-4 font-display text-3xl">This work isn&apos;t here</h1>
      <p className="mt-3 text-stone">
        The page or piece you&apos;re looking for may have sold or moved.
      </p>
      <Link
        href="/gallery"
        className="mt-8 inline-block bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
      >
        Back to the gallery
      </Link>
    </section>
  );
}
