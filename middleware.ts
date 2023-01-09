import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      //   if (req.nextUrl.pathname === "/admin") {
      console.log("🚀 ~ file: middleware.ts:8 ~ authorized ~ req.nextUrl.pathname", req.nextUrl.pathname)
      //     return token?.userRole === "admin"
      //   }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ['/betas/path:*'] };
