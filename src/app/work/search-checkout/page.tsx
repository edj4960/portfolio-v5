import Link from "next/link";

// const badges = [
//   "Next.js",
//   "TypeScript",
//   "Search",
//   "Payments",
//   "State management",
// ];

export default function SearchCheckoutPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <Link href="/work" className="link link-hover">
          ← Back to Work
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Case study removed
        </h1>
        <p className="max-w-3xl text-base text-base-content/70 md:text-lg">
          Placeholder project pages have been removed. See the Work page for
          career experience and shipped work.
        </p>
      </header>
    </div>
  );
}
