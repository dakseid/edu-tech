import React from "react";


export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24">
      <div className="max-w-lg text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn Anytime, Anywhere with{" "}
          <span className="text-indigo-600">Edutech</span>
        </h1>
        <p className="text-gray-600">
          Access hundreds of online courses designed by experts to boost your
          career and skills.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src="/hero-image.png"
          alt="Students"
          className="w-full md:max-w-md"
        />
      </div>
    </section>
  );
}
