export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/protected1'], // Add more protected routes here
};