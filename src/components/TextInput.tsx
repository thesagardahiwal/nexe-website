'use client';

import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  id: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder = '',
  id,
  type = 'text',
  autoComplete = 'off',
  required = false
}) => {
  return (
    <label className="block">
      <span className="text-sm font-medium text-muted">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1 block w-full rounded-md border border-border bg-slate-100/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-black/40 dark:text-slate-100 dark:placeholder:text-slate-500"
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </label>
  );
};

export default TextInput;
