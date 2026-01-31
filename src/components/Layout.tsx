"use client";

import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, role } = useAuth();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoggedIn && <Navbar />}
      
      <div className="flex flex-1">
        {isLoggedIn && !isAuthPage && <Sidebar role={role} />}
        
        <main className={`flex-1 transition-all duration-300 ${isLoggedIn && !isAuthPage ? "p-8" : ""}`}>
          {children}
        </main>
      </div>
      {!isLoggedIn && <Footer />}
    </div>
  );
}