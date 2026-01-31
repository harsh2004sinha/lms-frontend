import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-20 max-w-6xl mx-auto px-4 border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Excellence</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 font-bold">✓</span> Sequential Chapter Unlocking
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 font-bold">✓</span> PDF Certificate Generation
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 font-bold">✓</span> Strict Role-Based Access Control
              </li>
            </ul>
          </div>
          <div className="bg-blue-600 h-64 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl rotate-3">
             Project Architecture View
          </div>
        </div>
      </section>
    </main>
  );
}
