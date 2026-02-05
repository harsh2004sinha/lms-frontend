import MyCoursesList from "@/components/student/MyCourseList";

export default function MyCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900">My Enrolled Courses</h1>
        <p className="text-sm text-gray-500">Access and manage your learning materials here.</p>
      </div>
      <MyCoursesList />
    </div>
  );
}