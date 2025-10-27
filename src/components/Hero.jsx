import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] lg:h-[90vh]" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Somer Ville Public School
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            Nurturing curious minds through excellence, values, and innovation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#admissions" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white shadow hover:shadow-lg transition">
              Apply Now
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-sky-200 bg-white/80 px-6 py-3 text-sky-700 hover:bg-sky-50">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
