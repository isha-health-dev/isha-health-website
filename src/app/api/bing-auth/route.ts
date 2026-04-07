export async function GET() {
  return new Response(
    `<?xml version="1.0"?>\n<users>\n\t<user>20CDD9BA2D71831A2CDBA6A7679F26A3</user>\n</users>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
