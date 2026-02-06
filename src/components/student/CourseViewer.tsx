"use client";
import { useState, useEffect } from "react";
import api from "@/lib/axios";
import { Lock, PlayCircle, CheckCircle } from "lucide-react";

export default function CourseViewer({ courseId }: { courseId: string }) {
  const [courseData, setCourseData] = useState<any>(null);
  const [activeChapter, setActiveChapter] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await api.get(`/student/courses/${courseId}`);
        console.log("Course Details:", response);
        setCourseData(response.data);
        setActiveChapter(response.data.chapters[0]);
      } catch (err) {
        console.error("Error loading course details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseDetails();
  }, [courseId]);

  const handleChapterComplete = async (chapterId: number) => {
    try {
      await api.post(`/progress/${chapterId}/complete`);
      const updated = await api.get(`/student/courses/${courseId}`);
      setCourseData(updated.data);
      alert("Chapter Completed!");
    } catch (err) {
      alert("Complete previous chapters first!");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Course...</div>;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-160px)] gap-6">
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="aspect-video bg-black w-full">
          {activeChapter?.videoLink ? (
            <iframe 
              className="w-full h-full" 
              src={activeChapter.videoLink.replace("watch?v=", "embed/")} 
              allowFullScreen 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">No Video Available</div>
          )}
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">{activeChapter?.title}</h1>
          <p className="text-gray-600 leading-relaxed">{activeChapter?.description}</p>
          <div className="mt-8">
            <button 
              onClick={() => handleChapterComplete(activeChapter.id)}
              className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-80 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        <div className="p-4 border-b font-bold text-gray-700">Course Content</div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {courseData?.chapters?.map((chapter: any, index: number) => {
            const isLocked = index > courseData.completedChapters;
            const isCompleted = index < courseData.completedChapters;
            const isActive = activeChapter?.id === chapter.id;

            return (
              <button
                key={chapter.id}
                disabled={isLocked}
                onClick={() => setActiveChapter(chapter)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  isActive ? "bg-blue-50 border-blue-200 border" : "hover:bg-gray-50"
                } ${isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isLocked ? (
                  <Lock size={18} className="text-gray-400" />
                ) : isCompleted ? (
                  <CheckCircle size={18} className="text-green-500" />
                ) : (
                  <PlayCircle size={18} className="text-blue-500" />
                )}
                <div className="flex-1">
                  <p className={`text-sm font-medium ${isActive ? "text-blue-700" : "text-gray-700"}`}>
                    {chapter.title}
                  </p>
                  <p className="text-[10px] text-gray-400">Chapter {index + 1}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}