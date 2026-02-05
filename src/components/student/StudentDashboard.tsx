"use client";

import { StatsCard } from "../ui/StatsCard";
import { CourseProgressCard } from "../ui/CourseProgressCard";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { BookOpen, CheckCircle, Award, Clock } from "lucide-react";

export default function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/student/courses");
        console.log(localStorage);
        setCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading your progress...</div>;

  return (
    <div className="space-y-8 p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Learning Dashboard</h1>
        <p className="text-gray-500">Track your internship journey and course completions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Assigned" value={courses.length} icon={BookOpen} color="text-blue-600" />
        <StatsCard title="In Progress" value={courses.filter((c: any) => c.progressPercentage < 100).length} icon={Clock} color="text-yellow-600" />
        <StatsCard title="Completed" value={courses.filter((c: any) => c.progressPercentage === 100).length} icon={CheckCircle} color="text-green-600" />
        <StatsCard title="Certificates" value={courses.filter((c: any) => c.progressPercentage === 100).length} icon={Award} color="text-purple-600" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Courses</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course: any) => (
            <CourseProgressCard key={course.courseId} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
