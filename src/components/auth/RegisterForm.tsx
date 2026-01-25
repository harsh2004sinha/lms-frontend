"use client";
import { useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { AuthInput, AuthButton } from "../ui/AuthInput";

export default function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'STUDENT' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/auth/register', formData);
      router.push('/login');
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <AuthInput 
        label="Username" 
        type="text" 
        placeholder="John Doe"
        onChange={(e: any) => setFormData({...formData, email: e.target.value})} 
        required 
      />
      <AuthInput 
        label="Email Address" 
        type="email" 
        placeholder="name@gmail.com"
        onChange={(e: any) => setFormData({...formData, email: e.target.value})} 
        required 
      />
      <AuthInput 
        label="Password" 
        type="password" 
        placeholder="••••••••"
        onChange={(e: any) => setFormData({...formData, password: e.target.value})} 
        required 
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">I am a...</label>
        <select 
          className="px-4 py-2 border border-gray-300 rounded-md bg-white"
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        >
          <option value="STUDENT">Student</option>
          <option value="MENTOR">Mentor</option>
        </select>
      </div>
      <AuthButton loading={loading}>Create Account</AuthButton>
    </form>
  );
}