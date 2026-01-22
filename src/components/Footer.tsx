import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-200">
      <div className="w-full max-w-6xl px-6 py-12 mx-auto footer text-base-content">
        <aside className="space-y-2">
          <p className="text-lg font-semibold">
            Evan Jones - Full Stack Web Developer
          </p>
          <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">
            Next.js • TypeScript • Full stack
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xs uppercase tracking-[0.2em]">
            Links
          </h6>
          <div className="flex flex-col gap-2 text-sm">
            {/* <Link href="/work" className="link link-hover">
              Work
            </Link> */}
            <Link href="/services" className="link link-hover">
              Services
            </Link>
            <a
              className="link link-hover"
              href="https://docs.google.com/document/d/1U1Tm78HXmAY6j4oYV87nZcAJr_ZDvBcTLl8Pas-hq3Y/export?format=pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
            <a
              className="link link-hover"
              href="https://linkedin.com/in/evan-d-jones/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="link link-hover" href="mailto:evandj423@gmail.com">
              Email
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
