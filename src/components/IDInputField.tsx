'use client';

import React from 'react';

interface IDInputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
  onCopy: () => void;
  error?: string;
  placeholder: string;
  description: string;
  id: string;
}

const IDInputField: React.FC<IDInputFieldProps> = ({
  label,
  value,
  onChange,
  onGenerate,
  onCopy,
  error,
  placeholder,
  description,
  id
}) => {
  return (
    <label className="block">
      <span className="text-sm font-medium text-muted">
        {label}
      </span>
      <div className="mt-1 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="flex-1 rounded-md border border-border bg-slate-100/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-w-0 dark:bg-black/40 dark:text-slate-100 dark:placeholder:text-slate-500"
          placeholder={placeholder}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onGenerate}
            className="px-4 py-2 rounded-md border border-border bg-white/80 hover:border-slate-300 text-sm font-medium text-slate-700 transition-colors whitespace-nowrap flex-1 sm:flex-none dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40"
          >
            Generate
          </button>
          <button
            type="button"
            onClick={onCopy}
            disabled={!value}
            className="px-4 py-2 rounded-md border border-border bg-white/80 hover:border-slate-300 text-sm font-medium text-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-1 sm:flex-none dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40"
          >
            Copy
          </button>
        </div>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </label>
  );
};

export default IDInputField;
