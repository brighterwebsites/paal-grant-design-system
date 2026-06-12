/**
 * ProjectCard — image + overlay project card for portfolio and featured grids.
 * Used in the featured 2-column/2-row grid and the full portfolio masonry grid.
 *
 * @example
 * <ProjectCard
 *   image="https://paalgrant.com/wp-content/uploads/2026/03/mt-buninyong..."
 *   location="Buninyong"
 *   title="Country Estate — Circular Pool & Native Garden"
 * />
 */
export function ProjectCard({ image, location, title, tall = false, onClick }) {
  const [hovered, setHovered] = React.useState(false);

  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      background: '#1a1e14',
      borderRadius: 'var(--radius-lg)',
      height: tall ? '100%' : 'auto',
    },
  },
    React.createElement('img', {
      src: image,
      alt: title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'transform 0.7s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        minHeight: '220px',
        borderRadius: 'var(--radius-lg)',
      },
    }),
    React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--overlay-card)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '28px',
        borderRadius: 'var(--radius-lg)',
      },
    },
      React.createElement('p', {
        style: {
          fontSize: '0.6rem',
          fontWeight: 'var(--fw-light)',
          letterSpacing: 'var(--ls-spaced)',
          textTransform: 'uppercase',
          color: 'var(--color-sage-90)',
          marginBottom: '6px',
          fontFamily: 'var(--font-primary)',
        },
      }, location),
      React.createElement('p', {
        style: {
          fontSize: '1.1rem',
          fontWeight: 'var(--fw-extralight)',
          letterSpacing: 'var(--ls-wide)',
          color: 'var(--text-heading)',
          fontFamily: 'var(--font-primary)',
          lineHeight: 1.25,
        },
      }, title)
    )
  );
}
