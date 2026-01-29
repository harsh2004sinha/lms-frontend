import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600 tracking-tight">
        LMS<span className="text-gray-800">Portal</span>
      </div>
      <div className="space-x-6 flex items-center">
        <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
          Login
        </Link>
        <Link href="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md">
          Get Started
        </Link>
      </div>
    </nav>
  );
}