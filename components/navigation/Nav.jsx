/**
 * Nav — fixed top navigation bar with scroll-based glassmorphism.
 * Transitions from transparent gradient to solid dark + blur when scrolled.
 *
 * @example
 * <Nav
 *   currentPage="home"
 *   onNavigate={(page) => setPage(page)}
 *   logoSrc="./assets/logo-landscape-white.png"
 * />
 */
export function Nav({ currentPage = 'home', onNavigate = () => {}, logoSrc = '' }) {
  const [solid, setSolid] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 52px',
    height: solid ? '80px' : '100px',
    background: solid ? 'rgba(8,11,6,0.97)' : 'linear-gradient(to bottom,rgba(8,11,6,0.82) 0%,transparent 100%)',
    backdropFilter: solid ? 'blur(14px)' : 'none',
    transition: 'background 0.5s, height 0.3s',
    fontFamily: 'var(--font-primary)',
  };

  const linkStyle = (id) => ({
    fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: currentPage === id ? '#fff' : 'rgba(255,255,255,0.82)',
    textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none',
    fontFamily: 'var(--font-primary)',
  });

  const ctaStyle = {
    ...linkStyle('contact'),
    border: '1px solid rgba(138,155,122,0.6)',
    padding: '10px 28px',
    fontSize: '0.7rem',
    borderRadius: '6px',
    transition: 'background 0.25s, border-color 0.25s',
  };

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'packages', label: 'Design Packages' },
    { id: 'portfolio', label: 'Projects' },
  ];

  return React.createElement('nav', { style: navStyle },
    React.createElement('a', {
      onClick: () => onNavigate('home'),
      style: { cursor: 'pointer', flexShrink: 0 },
    },
      React.createElement('img', {
        src: logoSrc,
        alt: 'Paal Grant',
        style: { height: solid ? '52px' : '68px', width: 'auto', display: 'block', transition: 'height 0.3s' },
      })
    ),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '44px' } },
      React.createElement('ul', { style: { display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none' } },
        ...pages.map(p => React.createElement('li', { key: p.id },
          React.createElement('button', { style: linkStyle(p.id), onClick: () => onNavigate(p.id) }, p.label)
        )),
        React.createElement('li',  null,
          React.createElement('button', { style: ctaStyle, onClick: () => onNavigate('contact') }, 'Contact')
        )
      )
    )
  );
}
