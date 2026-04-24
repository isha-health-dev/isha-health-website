import Image from 'next/image';
import imageDims from './image-dims.json';
import { KeyTakeaways, Callout } from './mdx-callouts';

const dims: Record<string, { w: number; h: number }> = imageDims;

// Render markdown `![alt](src)` as next/image when the source is a local image
// in public/images/ (dimensions are probed at build time). Fall back to a
// plain <img> for external hosts or unknown paths.
function MDXImg({ src, alt, title }: { src?: string; alt?: string; title?: string }) {
  const safeAlt = alt ?? '';
  if (!src) return null;
  const meta = dims[src];
  if (meta) {
    return (
      <Image
        src={src}
        alt={safeAlt}
        width={meta.w}
        height={meta.h}
        title={title}
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ width: '100%', height: 'auto', maxWidth: `${meta.w}px`, display: 'block', margin: '1.5rem 0' }}
      />
    );
  }
  // External image or missing manifest entry — render plain img with lazy loading.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={safeAlt}
      title={title}
      loading="lazy"
      decoding="async"
      style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1.5rem 0' }}
    />
  );
}

// Components exposed to blog MDX. `KeyTakeaways` and `Callout` can be
// invoked directly in any .mdx file without an import statement; the
// img override maps markdown images to next/image.
export const mdxComponents = {
  img: MDXImg,
  KeyTakeaways,
  Callout,
};
