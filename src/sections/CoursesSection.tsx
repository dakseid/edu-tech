// src/sections/CoursesSection.tsx
import { motion } from "framer-motion";

const courses = [
  { title: "Web Development", desc: "Master modern web apps.", img: "https://source.unsplash.com/400x300/?code" },
  { title: "UI/UX Design", desc: "Learn to design stunning UIs.", img: "https://source.unsplash.com/400x300/?design" },
  { title: "Data Science", desc: "Unlock insights with data.", img: "https://source.unsplash.com/400x300/?data" },
];

export default function CoursesSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Popular <span className="text-indigo-600">Courses</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { CoursesSection };