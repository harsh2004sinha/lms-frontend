"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar({role}: {role: string | null}) {
    const pathname = usePathname();

    const menuItems = {
    STUDENT: [
      { name: "My Courses", path: "/student/courses" },
      { name: "Progress", path: "/student/dashboard" },
      { name: "Certificates", path: "/student/certificates" },
    ],
    MENTOR: [
      { name: "Manage Courses", path: "/mentor/courses" },
      { name: "Student Progress", path: "/mentor/dashboard" },
      { name: "Create Course", path: "/mentor/courses/new" },
    ],
    ADMIN: [
      { name: "User Management", path: "/admin/users" },
      { name: "Approve Mentors", path: "/admin/approvals" },
      { name: "Platform Analytics", path: "/admin/dashboard" },
    ],
  };

  const links = menuItems[role as keyof typeof menuItems] || [];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 transition-transform duration-300 ease-in-out fixed md:relative z-40">
      <div className="mb-10">
        <h2 className="text-xl font-bold text-blue-400">LMS Portal</h2>
        <p className="text-xs text-gray-400 uppercase mt-1 tracking-widest">{role}</p>
      </div>
      
      <nav className="space-y-2">
        {links.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className={`block px-4 py-2.5 rounded-lg transition-colors ${
              pathname === link.path ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button 
          onClick={() => { localStorage.clear(); window.location.href = "/"; }}
          className="w-full text-left px-4 py-2.5 mt-10 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}