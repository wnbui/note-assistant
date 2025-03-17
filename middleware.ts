export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/protected1', '/recorder'], // Add more protected routes here
};