import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Revalidate blog-related pages so new scheduled posts appear
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');
  revalidatePath('/');

  return NextResponse.json({
    ok: true,
    message: 'Revalidated blog, sitemap, and homepage',
    timestamp: new Date().toISOString(),
  });
}
