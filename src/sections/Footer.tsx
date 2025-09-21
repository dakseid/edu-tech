// src/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 px-8 md:px-20 bg-gray-900 text-gray-300">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EduSite</h2>
          <p className="text-sm">
            Empowering learners worldwide with quality online education.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} EduSite. All rights reserved.
      </p>
    </footer>
  );
}
