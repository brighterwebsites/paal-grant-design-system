import type { ChangeEventHandler } from 'react';

export interface FormFieldProps {
  /** Field label shown above the input */
  label: string;
  /** Input type — text, email, tel, textarea, select */
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  /** Placeholder text */
  placeholder?: string;
  /** Options for select type */
  options?: string[];
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
