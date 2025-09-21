// src/sections/FeaturesSection.tsx
const features = [
  { title: "Expert Instructors", desc: "Learn from industry leaders." },
  { title: "Flexible Learning", desc: "Study at your own pace." },
  { title: "Certificates", desc: "Get certified for your skills." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-gray-50">
      <h2 className="text-6xl font-bold text-center mb-12">
        Why Choose <span className="text-indigo-900">Edutech</span>?
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
