"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function MentorCoursesPage() {
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const response = await api.get("/mentor/courses");
        setMyCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch mentor courses", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyCourses();
  }, []);

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
          <p className="text-gray-500 text-sm">Create, edit, and monitor your educational content.</p>
        </div>
        <Link 
          href="/mentor/courses/new"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          <Plus size={20} /> Create Course
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Course Title</th>
              <th className="px-6 py-4 font-semibold">Students</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {myCourses.length > 0 ? (
              myCourses.map((course: any) => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800">{course.title}</p>
                    <p className="text-xs text-gray-400">{course.chapters?.length || 0} Chapters</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {course.studentCount || 0} enrolled
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">
                      Live
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-gray-400 italic">
                  No courses found. Click "Create Course" to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}