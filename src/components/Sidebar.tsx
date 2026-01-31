"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, BookOpen, Award, PlusCircle, 
  Users, CheckCircle, LogOut, ChevronLeft, ChevronRight, 
  BarChart3,
  UserCircle, 
} from "lucide-react"

export default function Sidebar({ role }: { role: string | null }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

const menuItems = {
  ROLE_STUDENT: [
    { name: "My Profile", path: "/profile", icon: UserCircle },
    { name: "My Courses", path: "/student/courses", icon: BookOpen },
    { name: "Progress", path: "/student/dashboard", icon: LayoutDashboard },
    { name: "Certificates", path: "/student/certificates", icon: Award },
  ],
  ROLE_MENTOR: [
    { name: "My Profile", path: "/profile", icon: UserCircle },
    { name: "Manage Courses", path: "/mentor/courses", icon: BookOpen },
    { name: "Student Progress", path: "/mentor/dashboard", icon: CheckCircle },
    { name: "Create Course", path: "/mentor/courses/new", icon: PlusCircle },
  ],
  ROLE_ADMIN: [
    { name: "My Profile", path: "/profile", icon: UserCircle },
    { name: "User Management", path: "/admin/users", icon: Users },
    { name: "Approve Mentors", path: "/admin/approvals", icon: CheckCircle },
    { name: "Platform Analytics", path: "/admin/dashboard", icon: BarChart3 },
  ],
};

  const links = menuItems[role as keyof typeof menuItems] || [];
  const displayRole = role ? role.replace("ROLE_", "") : "GUEST";

  return (
    <aside 
      className={`bg-slate-950 text-slate-300 min-h-screen p-4 flex flex-col transition-all duration-300 ease-in-out border-r border-slate-800 sticky top-0 h-screen ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 hover:cursor-pointer top-10 bg-blue-600 text-white rounded-full p-1 border-2 border-slate-950 hover:bg-blue-700 transition-colors"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`mb-8 flex items-center gap-3 overflow-hidden ${isCollapsed ? "justify-center" : "px-2"}`}>
        <div className="min-w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">
          LMS
        </div>
        {!isCollapsed && <h2 className="text-xl font-bold text-white truncate">Portal</h2>}
      </div>
      
      {!isCollapsed && (
        <div className="px-2 mb-6">
          <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded border border-blue-500/20 block text-center">
            {displayRole}
          </span>
        </div>
      )}

      <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.path;
          return (
            <Link 
              key={link.path} 
              href={link.path}
              title={isCollapsed ? link.name : ""}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "hover:bg-slate-900 hover:text-white"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400"}`} />
              {!isCollapsed && <span className="text-sm font-medium truncate">{link.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 mt-4 border-t border-slate-800">
        <button 
          onClick={() => { localStorage.clear(); window.location.href = "/"; }}
          className={`flex items-center gap-3 w-full px-3 py-3 text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all ${
            isCollapsed ? "justify-center" : ""
          }`}
          title={isCollapsed ? "Logout" : ""}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}