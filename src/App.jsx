import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
