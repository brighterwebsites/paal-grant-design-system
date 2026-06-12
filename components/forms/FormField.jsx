/**
 * FormField — labeled input, textarea, and select for the Paal Grant contact form.
 *
 * @example
 * <FormField label="Full Name" type="text" placeholder="Your name" />
 * <FormField label="Tell us about your project" type="textarea" />
 * <FormField label="I'm interested in" type="select" options={['Small Package', 'Medium Package']} />
 */
export function FormField({ label, type = 'text', placeholder = '', options = [], value, onChange }) {
  const labelStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '0.6rem',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-cap)',
    textTransform: 'uppercase',
    color: 'var(--color-cream-55)',
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    fontFamily: 'var(--font-primary)',
    background: 'var(--color-white-04)',
    border: '1px solid var(--border-mid)',
    padding: '14px 18px',
    color: 'var(--text-heading)',
    fontSize: '0.85rem',
    fontWeight: 'var(--fw-light)',
    outline: 'none',
    width: '100%',
    borderRadius: 'var(--radius-md)',
    transition: 'border-color var(--transition-fast)',
    WebkitFontSmoothing: 'antialiased',
  };

  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  let input;
  if (type === 'textarea') {
    input = React.createElement('textarea', {
      style: { ...inputStyle, resize: 'vertical', minHeight: '120px' },
      placeholder,
      value,
      onChange,
    });
  } else if (type === 'select') {
    input = React.createElement('select', {
      style: { ...inputStyle },
      value,
      onChange,
    }, ...options.map(opt =>
      React.createElement('option', { key: opt, value: opt, style: { background: '#1a1e14', color: '#fff' } }, opt)
    ));
  } else {
    input = React.createElement('input', {
      type,
      style: inputStyle,
      placeholder,
      value,
      onChange,
    });
  }

  return React.createElement('div', { style: wrapStyle },
    React.createElement('label', { style: labelStyle }, label),
    input
  );
}
