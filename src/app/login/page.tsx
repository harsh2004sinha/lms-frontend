import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </div>
    </main>
  );
}