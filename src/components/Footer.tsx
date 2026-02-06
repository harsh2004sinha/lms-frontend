import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">LMS<span className="text-blue-500">Portal</span></h3>
            <p className="text-sm leading-relaxed max-w-xs">
              A production-style Internship Learning Management System built with 
              Spring Boot and Next.js, emphasizing strict Role-Based Access Control.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-blue-400 transition-colors">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-blue-400 transition-colors">Create Student Account</Link></li>
              <li><Link href="/register" className="hover:text-blue-400 transition-colors">Apply as Mentor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Development</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Test-Driven Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Relational Database Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                RBAC Enforcement
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 - All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-gray-500 italic">Built for: All teachers and students to showcase their skills and learn from them.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}