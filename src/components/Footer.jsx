import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-600" />
              <span className="font-semibold text-slate-900">Somer Ville Public School</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              123 Learning Avenue, Knowledge City, 10001
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-slate-600 hover:text-sky-700" href="#about">About</a></li>
              <li><a className="text-slate-600 hover:text-sky-700" href="#academics">Academics</a></li>
              <li><a className="text-slate-600 hover:text-sky-700" href="#admissions">Admissions</a></li>
              <li><a className="text-slate-600 hover:text-sky-700" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Office</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mon–Fri: 8:00 AM – 4:00 PM</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@somerville.edu</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Stay Informed</h4>
            <p className="mt-3 text-sm text-slate-600">Subscribe for news and admissions updates.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-md border border-sky-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button type="submit" className="rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-sky-100 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Somer Ville Public School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-700">Privacy</a>
            <a href="#" className="hover:text-sky-700">Terms</a>
            <a href="#" className="hover:text-sky-700">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
