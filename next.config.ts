const nextConfig = {
    reactStrictMode: true,
    env: {
        COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
        COGNITO_ISSUER: process.env.COGNITO_ISSUER,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
};

export default nextConfig;