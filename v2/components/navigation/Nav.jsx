/**
 * Nav — fixed top navigation bar with scroll-based glassmorphism.
 * Transitions from transparent gradient overlay to solid dark charcoal + blur on scroll.
 *
 * @example
 * <Nav currentPage="home" onNavigate={(page) => setPage(page)} logoSrc="./assets/logo-landscape-white.png" />
 */
export function Nav({ currentPage = 'home', onNavigate = () => {}, logoSrc = '' }) {
  const [solid, setSolid] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 52px',
    height: solid ? 'var(--nav-height-solid)' : 'var(--nav-height)',
    background: solid ? 'rgba(43,43,43,0.97)' : 'linear-gradient(to bottom,rgba(8,11,6,0.82) 0%,transparent 100%)',
    backdropFilter: solid ? 'var(--blur-nav)' : 'none',
    transition: 'background var(--transition-bg), height var(--transition-nav)',
    fontFamily: 'var(--font-primary)',
  };

  const linkStyle = (id) => ({
    fontSize: 'var(--type-nav)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-navlink)',
    textTransform: 'uppercase',
    color: currentPage === id ? 'var(--color-white)' : 'var(--text-nav)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'var(--font-primary)',
    WebkitFontSmoothing: 'antialiased',
  });

  const ctaStyle = {
    fontSize: 'var(--text-ui-md)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-navlink)',
    textTransform: 'uppercase',
    color: 'var(--text-heading)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: '1px solid var(--color-sage-60)',
    padding: '10px 28px',
    borderRadius: 'var(--radius-md)',
    transition: 'background var(--transition-fast), border-color var(--transition-fast)',
    fontFamily: 'var(--font-primary)',
    WebkitFontSmoothing: 'antialiased',
  };

  const pages = [
    { id: 'home',      label: 'Home' },
    { id: 'about',     label: 'About' },
    { id: 'process',   label: 'Process' },
    { id: 'packages',  label: 'Design Packages' },
    { id: 'portfolio', label: 'Projects' },
  ];

  return React.createElement('nav', { style: navStyle },
    React.createElement('a', {
      onClick: () => onNavigate('home'),
      style: { cursor: 'pointer', flexShrink: 0, textDecoration: 'none' },
    },
      logoSrc
        ? React.createElement('img', {
            src: logoSrc,
            alt: 'Paal Grant',
            style: {
              height: solid ? 'var(--nav-logo-height-solid)' : 'var(--nav-logo-height)',
              width: 'auto',
              display: 'block',
              transition: 'height var(--transition-nav)',
            },
          })
        : React.createElement('div', {
            style: {
              display: 'flex', flexDirection: 'column', gap: '2px',
            },
          },
            React.createElement('span', {
              style: {
                fontFamily: 'var(--font-primary)',
                fontSize: '1.1rem',
                fontWeight: 'var(--fw-extralight)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-eggshell)',
                lineHeight: 1,
              },
            }, 'Paal Grant Designs'),
            React.createElement('span', {
              style: {
                fontFamily: 'var(--font-primary)',
                fontSize: '0.42rem',
                fontWeight: 'var(--fw-light)',
                letterSpacing: 'var(--ls-brand-max)',
                textTransform: 'uppercase',
                color: 'var(--color-sage-80)',
              },
            }, 'In Landscaping')
          )
    ),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '44px' } },
      React.createElement('ul', {
        style: { display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none', margin: 0, padding: 0 },
      },
        ...pages.map(p => React.createElement('li', { key: p.id },
          React.createElement('button', { style: linkStyle(p.id), onClick: () => onNavigate(p.id) }, p.label)
        )),
        React.createElement('li', null,
          React.createElement('button', { style: ctaStyle, onClick: () => onNavigate('contact') }, 'Contact')
        )
      )
    )
  );
}
