import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ['/betas/:path*', '/admin'] };
