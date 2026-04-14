import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    // Revalidate the specific therapist profile page
    if (slug) {
      revalidatePath(`/ketamine-therapist-directory/${slug}`);
    }

    // Revalidate the directory listing
    revalidatePath('/ketamine-therapist-directory');

    return NextResponse.json({ ok: true, revalidated: slug || 'directory' });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
