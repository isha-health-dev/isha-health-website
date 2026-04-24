import type { ReactNode } from 'react';

type KeyTakeawaysProps = {
  children?: ReactNode;
  items?: string[];
  title?: string;
};

// MDX callout for "Key takeaways" — a short scannable summary a reader
// can take in without reading the full post.
//
// Preferred usage in an .mdx file (no import needed; registered via
// mdx-components.tsx). Keep blank lines around the markdown list so MDX
// parses the bullets as a list rather than inline content:
//
//   <KeyTakeaways>
//
//   - Ketamine reaches peak effect in 40–60 min.
//   - Most patients see improvement within 2–3 sessions.
//   - Treatment is covered as HSA/FSA-eligible.
//
//   </KeyTakeaways>
//
// You can also pass an `items` string[] prop, but multi-line array
// literals can trip MDX's expression parser; the children form above is
// the robust pattern.
export function KeyTakeaways({ children, items, title = 'Key takeaways' }: KeyTakeawaysProps) {
  const list = items && items.length > 0 ? items : null;
  return (
    <aside
      style={{
        background: '#f0fdfa',
        border: '1px solid #ccfbf1',
        borderLeft: '4px solid #0d9488',
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        margin: '1.75rem 0',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <p
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#0f766e',
          margin: '0 0 0.6rem',
        }}
      >
        {title}
      </p>
      {list ? (
        <ul
          style={{
            listStyle: 'disc',
            paddingLeft: '1.25rem',
            margin: 0,
            color: '#134e4a',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}
        >
          {list.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.35rem' }}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ color: '#134e4a', fontSize: '0.95rem', lineHeight: 1.6 }}>{children}</div>
      )}
    </aside>
  );
}

// Also exposed as a generic "callout" in case we want more variants later
// (Research Note, Clinician Note, Patient Safety, etc.) sharing the styling.
type CalloutProps = {
  title: string;
  tone?: 'teal' | 'amber' | 'slate';
  children: ReactNode;
};

const toneStyles: Record<
  NonNullable<CalloutProps['tone']>,
  { bg: string; border: string; rule: string; label: string; body: string }
> = {
  teal: {
    bg: '#f0fdfa',
    border: '#ccfbf1',
    rule: '#0d9488',
    label: '#0f766e',
    body: '#134e4a',
  },
  amber: {
    bg: '#fffbeb',
    border: '#fde68a',
    rule: '#d97706',
    label: '#b45309',
    body: '#78350f',
  },
  slate: {
    bg: '#f8fafc',
    border: '#e2e8f0',
    rule: '#64748b',
    label: '#475569',
    body: '#1e293b',
  },
};

export function Callout({ title, tone = 'teal', children }: CalloutProps) {
  const t = toneStyles[tone];
  return (
    <aside
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderLeft: `4px solid ${t.rule}`,
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        margin: '1.75rem 0',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <p
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: t.label,
          margin: '0 0 0.6rem',
        }}
      >
        {title}
      </p>
      <div style={{ color: t.body, fontSize: '0.95rem', lineHeight: 1.6 }}>{children}</div>
    </aside>
  );
}
