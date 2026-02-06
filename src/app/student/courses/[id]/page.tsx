import CourseViewer from "@/components/student/CourseViewer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CourseViewer courseId={resolvedParams.id} />;
}