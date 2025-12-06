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
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
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
          className="flex-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0"
          placeholder={placeholder}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onGenerate}
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium transition-colors whitespace-nowrap flex-1 sm:flex-none"
          >
            Generate
          </button>
          <button
            type="button"
            onClick={onCopy}
            disabled={!value}
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-1 sm:flex-none"
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
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </label>
  );
};

export default IDInputField;