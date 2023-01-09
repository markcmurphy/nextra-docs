import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  console.log("🚀 ~ file: middleware.ts:5 ~ middleware ~ url", url)
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
  console.log('viewport', viewport);
}
