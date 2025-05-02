export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/protected1', '/recorder', '/AIassistant'] // Add more protected routes here
};