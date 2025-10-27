import React from 'react';

export default function Highlights() {
  const cards = [
    {
      id: 'about',
      title: 'About Somer Ville',
      desc: 'A caring, inclusive community where students thrive academically and socially. We blend strong fundamentals with modern pedagogy and technology.',
      cta: 'Discover Our Ethos',
    },
    {
      id: 'academics',
      title: 'Academic Excellence',
      desc: 'From foundational literacy to advanced STEM, our curriculum builds skills for the future with project-based learning and dedicated faculty.',
      cta: 'Explore Academics',
    },
    {
      id: 'admissions',
      title: 'Admissions 2025',
      desc: 'Applications are open for Kindergarten through Grade 12. Scholarships and need-based aid are available for eligible students.',
      cta: 'Start Your Application',
    },
  ];

  return (
    <section className="py-16 sm:py-20" aria-label="Highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">A vibrant, student-first environment</h2>
          <p className="mt-3 text-slate-600">
            We champion curiosity, creativity, and character. See how we bring learning to life every day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.id}
              id={card.id}
              href={`#${card.id}`}
              className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative p-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sky-700 font-medium">
                  {card.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Facilities</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern science labs, a well-stocked library, art studios, smart classrooms, and safe sports grounds empower hands-on learning.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Clubs & Activities</h3>
            <p className="mt-2 text-sm text-slate-600">
              Debate, robotics, music, theatre, coding, environmental action and more—there’s a place for every passion.
            </p>
          </div>
          <div id="contact" className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contact Admissions</h3>
            <p className="mt-2 text-sm text-slate-600">
              Email: admissions@somerville.edu • Phone: +1 (555) 123-4567
            </p>
            <a href="#admissions" className="mt-4 inline-flex rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white shadow">
              Begin Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
