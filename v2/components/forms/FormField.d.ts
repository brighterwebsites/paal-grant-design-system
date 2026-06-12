export interface FormFieldProps {
  /** Label text rendered above the input */
  label: string;
  /** Input type: text, email, tel, textarea, select */
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  /** Options array for select type */
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
