import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default
 
export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: "current time is" + new Date(),
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}