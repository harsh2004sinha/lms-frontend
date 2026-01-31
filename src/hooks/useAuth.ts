"use client"

import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setIsLoggedIn(true);
            setRole(localStorage.getItem('role'));
        }
    }, []);

    return { isLoggedIn, role };
}