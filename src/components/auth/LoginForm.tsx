// src/components/auth/LoginForm.tsx
"use client";
import { useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { AuthInput, AuthButton } from "../ui/AuthInput";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password }); // 
      localStorage.setItem('token', response.data); // Store Mandatory JWT [cite: 80]
      router.push('/dashboard'); 
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 w-full max-w-md">
      <AuthInput 
        label="Email" 
        type="email" 
        onChange={(e: any) => setEmail(e.target.value)} 
        required 
      />
      <AuthInput 
        label="Password" 
        type="password" 
        onChange={(e: any) => setPassword(e.target.value)} 
        required 
      />
      <AuthButton loading={loading}>Sign In</AuthButton>
    </form>
  );
}