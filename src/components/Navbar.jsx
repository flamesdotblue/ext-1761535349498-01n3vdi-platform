import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#academics', label: 'Academics' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-600" />
            <span className="font-semibold text-slate-900">Somer Ville Public School</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-sky-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white shadow hover:shadow-md transition shadow-sky-200">
              Apply Now
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-sky-50"
            onClick={() => setOpen((o) => !o)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-slate-700 hover:bg-sky-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-2 text-center text-white shadow"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
