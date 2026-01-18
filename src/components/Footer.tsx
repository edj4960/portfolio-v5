import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-200/40">
      <div className="footer mx-auto w-full max-w-6xl px-6 py-12 text-base-content">
        <aside className="space-y-2">
          <p className="text-lg font-semibold">Evan Jones — Next.js Developer</p>
          <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">
            Build • Debug • Optimize
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xs uppercase tracking-[0.2em]">
            Links
          </h6>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/work" className="link link-hover">
              Work
            </Link>
            <Link href="/services" className="link link-hover">
              Services
            </Link>
            <a
              className="link link-hover"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="link link-hover" href="mailto:hello@example.com">
              Email
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
