import { motion } from "framer-motion";

const courses = [
    {
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        duration: "4 weeks",
        level: "Beginner"
    },
    {
        title: "Web Development Bootcamp",
        description: "Become a full-stack web developer with this comprehensive course.",
        duration: "12 weeks",
        level: "Intermediate"
    },
    {
        title: "Data Science and Machine Learning",
        description: "Master data analysis and machine learning techniques.",
        duration: "8 weeks",
        level: "Advanced"
    }
];
const Courses = () => {
    return (
        <section id="courses" className="py-20 bg-gray-800 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {courses.map((course) => (
                    <motion.div 
                    key={course.title}
                    className="bg-gray-800 p-6 rounded-xl w-72 cursor-pointer hover:bg-blue-500 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                        <p >{course.description}</p>
                        </motion.div>
                ))}
            </div>
        </section>
    );
}
export default Courses;