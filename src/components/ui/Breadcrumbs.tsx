"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const LABEL_MAP: Record<string, string> = {
  student: "",
  mentor: "",
  admin: "",
  dashboard: "My Dashboard",
  courses: "My Courses",
  certificates: "My Certificates",
  approvals: "Pending Approvals",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((v) => v);
  const CHAR_LIMIT = 20;

  const formatSegment = (text: string) => {
    // Check if we have a custom label first
    if (LABEL_MAP[text.toLowerCase()] !== undefined) {
      return LABEL_MAP[text.toLowerCase()];
    }

    let label = text.replace(/-/g, " ");
    label = label.charAt(0).toUpperCase() + label.slice(1);
    
    if (label.length > CHAR_LIMIT) {
      return `.../${label.slice(-CHAR_LIMIT)}`;
    }
    return label;
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <Link href="/" className="hover:text-blue-600 transition-colors">
        <Home size={16} />
      </Link>

      {segments.map((seg, i) => {
        const path = `/${segments.slice(0, i + 1).join("/")}`;
        const label = formatSegment(seg);
        const isLast = i === segments.length - 1;

        // Skip rendering if the segment maps to an empty string (like 'student')
        if (label === "") return null;

        return (
          <div key={path} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-gray-300" />
            {isLast ? (
              <span className="font-bold text-slate-800">
                {label}
              </span>
            ) : (
              <Link href={path} className="hover:text-blue-500 transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}