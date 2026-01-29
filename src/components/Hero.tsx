const roles = [
  {
    title: "Students",
    desc: "Access assigned courses, track sequential progress, and earn certificates.",
    icon: "🎓",
    color: "bg-blue-50"
  },
  {
    title: "Mentors",
    desc: "Create courses, manage chapters, and track student performance.",
    icon: "👨‍🏫",
    color: "bg-green-50"
  },
  {
    title: "Admins",
    desc: "Full platform control: approve mentors and view platform-wide analytics.",
    icon: "⚙️",
    color: "bg-purple-50"
  }
];

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Master Your Skills with <br />
          <span className="text-blue-600">Structured Learning</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          A production-grade Internship Learning Management System with strict access control and real-time progress tracking.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div key={role.title} className={`${role.color} p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left`}>
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{role.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}