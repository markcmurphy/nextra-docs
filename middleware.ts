import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (token) return true; // If there is a token, the user is authenticated
      },
    },
    //   callbacks: {
    //     authorized({ req, token }){
    //       console.log("🚀 ~ file: middleware.ts:6 ~ authorized: ~ token", token)
    //       const pathname = req.nextUrl.pathname;
    //       if (pathname.startsWith('/_next') || pathname === '/favicon.ico')
    //         return true;
    //       if (token) return true;
    //       return false;
    //     },
    //   }
  }
);

export const config = { matcher: ['/betas/:path*'] };
