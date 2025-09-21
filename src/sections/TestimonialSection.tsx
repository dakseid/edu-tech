// src/sections/TestimonialsSection.tsx
import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah L.", text: "This platform completely changed how I learn!", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "James W.", text: "Amazing instructors and high-quality content.", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Emily R.", text: "Flexible learning that fits my busy schedule.", img: "https://randomuser.me/api/portraits/women/3.jpg" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our <span className="text-indigo-600">Students Say</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic mb-4">"{t.text}"</p>
            <h4 className="text-lg font-semibold text-center">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
