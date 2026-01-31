export const CourseProgressCard = ({ course }: any) => {
  const progress = course.progressPercentage || 0; 
  const isCompleted = progress === 100;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
          <p className="text-xs text-gray-500 line-clamp-1">{course.description}</p>
        </div>
        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${
          isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {isCompleted ? 'Completed' : 'In Progress'}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 text-xs">
            {course.completedChapters} of {course.totalChapters} Chapters
          </span>
          <span className="font-semibold text-blue-600">{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full transition-all duration-700 ease-out ${
              isCompleted ? 'bg-green-500' : 'bg-blue-600'
            }`} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button 
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
          isCompleted 
            ? "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200" 
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isCompleted ? "Download Certificate" : "Continue Learning"}
      </button>
    </div>
  );
};