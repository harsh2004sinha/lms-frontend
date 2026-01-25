import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Join the LMS</h2>
          <p className="mt-2 text-sm text-gray-600">Start your internship learning journey</p>
        </div>
        <RegisterForm />
        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
}