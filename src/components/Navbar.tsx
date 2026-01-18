"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActiveLink = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="navbar mx-auto w-full max-w-6xl px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow"
          >
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li key={link.href}>
                  <Link
                    className={`${
                      isActive ? "bg-base-200 font-medium" : ""
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Evan Jones
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`btn btn-ghost btn-sm transition ${
                    isActive
                      ? "bg-base-200 text-base-content"
                      : "text-base-content/70 hover:text-base-content"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link
          href="/contact"
          className="btn btn-primary btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Let&#39;s talk
        </Link>
      </div>
    </div>
  );
}
