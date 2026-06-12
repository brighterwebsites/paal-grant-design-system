/**
 * ProjectCard — image + overlay project card for portfolio and featured grids.
 *
 * @example
 * <ProjectCard
 *   image="./assets/mt-buninyong-country-estate-brick-archway-entrance-paal-grant-050-1200x630.webp"
 *   location="Buninyong"
 *   title="Country Estate — Circular Pool & Native Garden"
 * />
 */
export function ProjectCard({ image, location, title, tall = false, minHeight = '220px', onClick }) {
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
        minHeight,
      },
    }),
    React.createElement('div', {
      style: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(6,9,5,0.88) 0%, transparent 100%)',
        padding: '36px 28px 24px',
      },
    },
      React.createElement('p', {
        style: {
          fontSize: 'var(--text-micro-md)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: 'var(--ls-cta)',
          textTransform: 'uppercase',
          color: 'var(--color-sage-90)',
          marginBottom: '6px',
          fontFamily: 'var(--font-primary)',
        },
      }, location),
      React.createElement('p', {
        style: {
          fontSize: 'var(--text-subhead)',
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
