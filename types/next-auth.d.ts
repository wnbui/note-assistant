import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            accessToken?: string;
            idToken?: string;
            refreshToken?: string;
        };
    }

    interface JWT {
        accessToken?: string;
        idToken?: string;
        refreshToken?: string;
    }
}