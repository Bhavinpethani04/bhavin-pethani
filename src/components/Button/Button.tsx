import type { ButtonProps } from '../../types';
import styles from './Button.module.css';

export function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  target,
  ariaLabel,
  icon,
}: ButtonProps) {
  const className = [styles.btn, styles[variant], styles[size]].join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel ?? label}
      >
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;

