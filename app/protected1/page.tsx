'use client';

import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Protected Route</h1>
            <p>Welcome, {session?.user?.email}!</p>
        </div>
    );
}