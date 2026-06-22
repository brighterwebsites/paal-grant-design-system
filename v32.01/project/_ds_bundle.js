/* @ds-bundle: {"format":3,"namespace":"PaalGrantDesignSystem_0e25b8","components":[{"name":"AwardPlaque","sourcePath":"components/awards/AwardPlaque.jsx"},{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"ReviewCard","sourcePath":"components/reviews/ReviewCard.jsx"}],"sourceHashes":{"components/awards/AwardPlaque.jsx":"737e715d1ae1","components/badges/Badge.jsx":"8fc13cc8252e","components/buttons/Button.jsx":"72479c7ce0bf","components/cards/ProjectCard.jsx":"4043fd2a55cb","components/forms/FormField.jsx":"176a4c78ec10","components/navigation/Nav.jsx":"70601c9d157b","components/reviews/ReviewCard.jsx":"4911de291be2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PaalGrantDesignSystem_0e25b8 = window.PaalGrantDesignSystem_0e25b8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/awards/AwardPlaque.jsx
try { (() => {
/**
 * AwardPlaque — gold-bordered award/credential card used in the scrolling awards strip.
 * New in v27. Displays award category, name, and subtitle on a dark gold-tinted background.
 * v28: botanical sprig crest (replaces emoji icon), softer 12px radius, heavier meta.
 *
 * @example
 * <AwardPlaque
 *   category="International Award"
 *   name="Gardening World Cup"
 *   subtitle="People's Choice & Best Design · Japan"
 * />
 */
function AwardPlaque({
  icon,
  motif = true,
  category,
  name,
  subtitle
}) {
  const [hovered, setHovered] = React.useState(false);
  const sprig = React.createElement('svg', {
    width: 26,
    height: 32,
    viewBox: '0 0 64 80',
    fill: 'none',
    style: {
      display: 'block',
      marginBottom: '14px',
      color: 'var(--color-gold)'
    },
    'aria-hidden': true
  }, React.createElement('path', {
    d: 'M32 80 C31 60 33 38 32 16',
    stroke: 'currentColor',
    strokeWidth: 1.1,
    strokeLinecap: 'round',
    fill: 'none'
  }), React.createElement('g', {
    fill: 'currentColor'
  }, React.createElement('path', {
    d: 'M32 62 C32 54 38 50 47 49 C44 57 39 61 32 62 Z'
  }), React.createElement('path', {
    d: 'M32 62 C32 54 26 50 17 49 C20 57 25 61 32 62 Z'
  }), React.createElement('path', {
    d: 'M32 50 C32 43 37 39 45 38 C42 45 38 49 32 50 Z'
  }), React.createElement('path', {
    d: 'M32 50 C32 43 27 39 19 38 C22 45 26 49 32 50 Z'
  }), React.createElement('path', {
    d: 'M32 39 C32 33 36 30 43 29 C40 35 37 38 32 39 Z'
  }), React.createElement('path', {
    d: 'M32 39 C32 33 28 30 21 29 C24 35 27 38 32 39 Z'
  }), React.createElement('path', {
    d: 'M32 29 C32 24 35 21 41 20 C38 26 36 28 32 29 Z'
  }), React.createElement('path', {
    d: 'M32 29 C32 24 29 21 23 20 C26 26 28 28 32 29 Z'
  }), React.createElement('path', {
    d: 'M32 21 C30 16 31 11 32 7 C33 11 34 16 32 21 Z'
  })));
  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'linear-gradient(160deg, #2a2620 0%, #1a1610 50%, #2a2620 100%)',
      border: `1px solid ${hovered ? 'rgba(210,170,80,0.65)' : 'rgba(210,170,80,0.4)'}`,
      borderTop: `3px solid ${hovered ? 'rgba(210,170,80,1)' : 'rgba(210,170,80,0.9)'}`,
      borderRadius: 'var(--radius-card-feature)',
      padding: '32px 36px 28px',
      width: '280px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform var(--transition-mid), border-color var(--transition-mid)',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: 'var(--font-primary)',
      WebkitFontSmoothing: 'antialiased'
    }
  }, motif ? sprig : React.createElement('span', {
    style: {
      fontSize: '1.8rem',
      marginBottom: '14px',
      display: 'block'
    }
  }, icon), React.createElement('span', {
    style: {
      fontSize: '0.62rem',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--color-gold)',
      textShadow: '0 0 12px rgba(210,170,80,0.35)',
      textAlign: 'center',
      marginBottom: '10px',
      display: 'block'
    }
  }, category), React.createElement('span', {
    style: {
      fontSize: '1rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--color-seed-puff)',
      textAlign: 'center',
      lineHeight: 1.4,
      marginBottom: '8px',
      display: 'block'
    }
  }, name), React.createElement('span', {
    style: {
      fontSize: '0.72rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--color-gold-75)',
      textAlign: 'center',
      display: 'block',
      lineHeight: 1.5
    }
  }, subtitle));
}
Object.assign(__ds_scope, { AwardPlaque });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/awards/AwardPlaque.jsx", error: String((e && e.message) || e) }); }

// components/badges/Badge.jsx
try { (() => {
/**
 * Badge — section label, award badge, size badge, tag, breadcrumb, and gold-award variants.
 *
 * @example
 * <Badge variant="section-label">Selected Work</Badge>
 * <Badge variant="award">Award-Winning Landscape Design</Badge>
 * <Badge variant="size">Medium · Most Popular</Badge>
 * <Badge variant="tag">Onsite or Virtual · $350 credited</Badge>
 * <Badge variant="gold-title">International Award</Badge>
 */
function Badge({
  variant = 'section-label',
  children
}) {
  const base = {
    fontFamily: 'var(--font-primary)',
    display: 'inline-block',
    WebkitFontSmoothing: 'antialiased'
  };
  const variants = {
    'section-label': {
      fontSize: 'var(--type-section-label)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-brand)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)'
    },
    award: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--accent-ghost)',
      border: '1px solid var(--color-sage-45)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 36px',
      fontSize: 'var(--text-label-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)'
    },
    size: {
      fontSize: 'var(--text-nano)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-brand)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-85)'
    },
    tag: {
      display: 'inline-block',
      background: 'var(--accent-ghost)',
      border: '1px solid var(--color-sage-45)',
      borderRadius: 'var(--radius-lg)',
      padding: '8px 20px',
      fontSize: 'var(--text-micro-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)'
    },
    breadcrumb: {
      fontSize: 'var(--text-ui-lg)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      color: 'var(--color-dim)'
    },
    'gold-title': {
      fontSize: 'var(--text-nano-sm)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-ultra)',
      textTransform: 'uppercase',
      color: 'var(--color-gold-80)',
      display: 'block',
      textAlign: 'center'
    },
    'size-badge': {
      fontSize: 'var(--text-ui-lg)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-cap)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-85)',
      border: '1px solid var(--color-sage-28)',
      borderRadius: 'var(--radius-lg)',
      padding: '7px 18px'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants['section-label'])
  };
  return React.createElement('span', {
    style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
/**
 * Button — primary sage, ghost, and nav CTA variants for Paal Grant.
 * Use btn-sage for primary CTAs, btn-ghost for secondary, nav-cta inside nav bar.
 *
 * @example
 * <Button variant="sage">View Design Packages</Button>
 * <Button variant="ghost">Our Process</Button>
 * <Button variant="nav-cta">Contact</Button>
 * <Button variant="sage" size="sm">Enquire</Button>
 * <Button variant="sage" disabled>Unavailable</Button>
 */
function Button({
  variant = 'sage',
  size = 'md',
  disabled = false,
  onClick,
  href,
  children
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--fw-regular)',
    fontSize: size === 'sm' ? 'var(--text-micro-md)' : 'var(--type-cta)',
    letterSpacing: 'var(--ls-cta)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    padding: size === 'sm' ? '10px 28px' : '14px 44px',
    border: '1px solid',
    borderRadius: 'var(--radius-button)',
    transition: 'background var(--transition-mid), border-color var(--transition-mid)',
    lineHeight: 1,
    WebkitFontSmoothing: 'antialiased',
    background: 'transparent'
  };
  const variants = {
    sage: {
      background: 'var(--accent-subtle)',
      borderColor: 'var(--color-sage-70)',
      color: 'var(--text-heading)'
    },
    ghost: {
      background: 'transparent',
      borderColor: 'var(--color-white-30)',
      color: 'var(--text-nav)'
    },
    'nav-cta': {
      background: 'transparent',
      borderColor: 'var(--color-sage-60)',
      color: 'var(--text-heading)',
      padding: '10px 28px',
      fontSize: 'var(--text-ui-md)',
      borderRadius: 'var(--radius-md)'
    },
    pkg: {
      display: 'block',
      textAlign: 'center',
      padding: '13px',
      borderColor: 'var(--color-sage-45)',
      color: 'var(--color-white-78)',
      fontSize: 'var(--text-micro-md)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-cta)'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.sage)
  };
  const tag = href ? 'a' : 'button';
  return React.createElement(tag, {
    style,
    disabled,
    onClick,
    href
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
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
function ProjectCard({
  image,
  location,
  title,
  tall = false,
  minHeight = '220px',
  onClick
}) {
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
      borderRadius: 'var(--radius-card)',
      height: tall ? '100%' : 'auto'
    }
  }, React.createElement('img', {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.7s ease',
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
      minHeight
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(6,9,5,0.88) 0%, transparent 100%)',
      padding: '36px 28px 24px'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-micro-md)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-cta)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-90)',
      marginBottom: '6px',
      fontFamily: 'var(--font-primary)'
    }
  }, location), React.createElement('p', {
    style: {
      fontSize: 'var(--text-subhead)',
      fontWeight: 'var(--fw-extralight)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-primary)',
      lineHeight: 1.25
    }
  }, title)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * FormField — labeled input, textarea, and select for the Paal Grant contact form.
 *
 * @example
 * <FormField label="Full Name" type="text" placeholder="Your name" />
 * <FormField label="Tell us about your project" type="textarea" />
 * <FormField label="I'm interested in" type="select" options={['Small Package','Medium Package','Large Package']} />
 */
function FormField({
  label,
  type = 'text',
  placeholder = '',
  options = [],
  value,
  onChange
}) {
  const labelStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-micro-md)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-cap)',
    textTransform: 'uppercase',
    color: 'var(--color-muted)',
    display: 'block',
    marginBottom: '8px'
  };
  const inputStyle = {
    fontFamily: 'var(--font-primary)',
    background: 'var(--color-white-04)',
    border: '1px solid var(--border-mid)',
    padding: '14px 18px',
    color: 'var(--text-heading)',
    fontSize: 'var(--text-body-xs)',
    fontWeight: 'var(--fw-light)',
    outline: 'none',
    width: '100%',
    borderRadius: 'var(--radius-input)',
    transition: 'border-color var(--transition-fast)',
    WebkitFontSmoothing: 'antialiased'
  };
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  let input;
  if (type === 'textarea') {
    input = React.createElement('textarea', {
      style: {
        ...inputStyle,
        resize: 'vertical',
        minHeight: '120px'
      },
      placeholder,
      value,
      onChange
    });
  } else if (type === 'select') {
    input = React.createElement('select', {
      style: inputStyle,
      value,
      onChange
    }, ...options.map(opt => React.createElement('option', {
      key: opt,
      value: opt,
      style: {
        background: '#1a1e14',
        color: 'var(--color-eggshell)'
      }
    }, opt)));
  } else {
    input = React.createElement('input', {
      type,
      style: inputStyle,
      placeholder,
      value,
      onChange
    });
  }
  return React.createElement('div', {
    style: wrapStyle
  }, React.createElement('label', {
    style: labelStyle
  }, label), input);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
/**
 * Nav — fixed top navigation bar with scroll-based glassmorphism.
 * Transitions from transparent gradient overlay to solid dark charcoal + blur on scroll.
 *
 * @example
 * <Nav currentPage="home" onNavigate={(page) => setPage(page)} logoSrc="./assets/logo-landscape-white.png" />
 */
function Nav({
  currentPage = 'home',
  onNavigate = () => {},
  logoSrc = ''
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 52px',
    height: solid ? 'var(--nav-height-solid)' : 'var(--nav-height)',
    background: solid ? 'rgba(43,43,43,0.97)' : 'linear-gradient(to bottom,rgba(8,11,6,0.82) 0%,transparent 100%)',
    backdropFilter: solid ? 'var(--blur-nav)' : 'none',
    transition: 'background var(--transition-bg), height var(--transition-nav)',
    fontFamily: 'var(--font-primary)'
  };
  const linkStyle = id => ({
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
    WebkitFontSmoothing: 'antialiased'
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
    WebkitFontSmoothing: 'antialiased'
  };
  const pages = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'process',
    label: 'Process'
  }, {
    id: 'packages',
    label: 'Design Packages'
  }, {
    id: 'portfolio',
    label: 'Projects'
  }];
  return React.createElement('nav', {
    style: navStyle
  }, React.createElement('a', {
    onClick: () => onNavigate('home'),
    style: {
      cursor: 'pointer',
      flexShrink: 0,
      textDecoration: 'none'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: 'Paal Grant',
    style: {
      height: solid ? 'var(--nav-logo-height-solid)' : 'var(--nav-logo-height)',
      width: 'auto',
      display: 'block',
      transition: 'height var(--transition-nav)'
    }
  }) : React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: '1.1rem',
      fontWeight: 'var(--fw-extralight)',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--color-eggshell)',
      lineHeight: 1
    }
  }, 'Paal Grant Designs'), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: '0.42rem',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-brand-max)',
      textTransform: 'uppercase',
      color: 'var(--color-sage-80)'
    }
  }, 'In Landscaping'))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '44px'
    }
  }, React.createElement('ul', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, ...pages.map(p => React.createElement('li', {
    key: p.id
  }, React.createElement('button', {
    style: linkStyle(p.id),
    onClick: () => onNavigate(p.id)
  }, p.label))), React.createElement('li', null, React.createElement('button', {
    style: ctaStyle,
    onClick: () => onNavigate('contact')
  }, 'Contact')))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/reviews/ReviewCard.jsx
try { (() => {
/**
 * ReviewCard — client Google Review card used in the scrolling reviews strip.
 * New in v27. Shows avatar initials, name, date, stars, review text, and Google badge.
 *
 * @example
 * <ReviewCard
 *   initials="SP"
 *   avatarColor="#8a9b7a"
 *   name="Sumitra Phoenix"
 *   date="2 months ago"
 *   text="Paal has the skill of listening carefully — patient and collaborative throughout."
 * />
 */
function ReviewCard({
  initials,
  avatarColor = '#8a9b7a',
  name,
  date,
  text
}) {
  const [hovered, setHovered] = React.useState(false);
  const stars = Array(5).fill(null).map((_, i) => React.createElement('span', {
    key: i,
    style: {
      color: 'var(--color-sage-alt)',
      fontSize: '0.85rem'
    }
  }, '★'));
  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'var(--color-card-mid)',
      border: `1px solid ${hovered ? 'rgba(168,178,153,0.4)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 'var(--radius-card-feature)',
      padding: '36px 36px 32px',
      width: '380px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      transition: 'border-color var(--transition-mid), transform var(--transition-mid)',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: 'var(--font-primary)',
      WebkitFontSmoothing: 'antialiased'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, React.createElement('div', {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: avatarColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      fontWeight: 'var(--fw-light)',
      color: 'var(--color-page)',
      flexShrink: 0,
      fontFamily: 'var(--font-primary)'
    }
  }, initials), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: '0.85rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--text-heading)',
      marginBottom: '2px'
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 'var(--text-micro-lg)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--color-muted)'
    }
  }, date)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '3px',
      marginLeft: 'auto'
    }
  }, ...stars)), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-light)',
      lineHeight: 'var(--lh-loose)',
      color: 'var(--text-body)',
      fontStyle: 'italic',
      flex: 1,
      margin: 0
    }
  }, `"${text}"`), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: 'var(--text-micro-md)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-nav)',
      textTransform: 'uppercase',
      color: 'var(--color-muted)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '16px'
    }
  }, React.createElement('div', {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--color-sage-alt)'
    }
  }), 'Google Review'));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reviews/ReviewCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AwardPlaque = __ds_scope.AwardPlaque;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

})();
