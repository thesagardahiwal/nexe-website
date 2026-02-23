'use client';

import React, { useState } from 'react';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  id: string;
  label: string;
  showStrength?: boolean;
  autoComplete?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  error,
  placeholder = '',
  id,
  label,
  showStrength = false,
  autoComplete = 'off'
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, text: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    const strengthText = score <= 2 ? 'Weak' : score <= 4 ? 'Medium' : 'Strong';
    const strengthColor = score <= 2 ? 'bg-red-500' : score <= 4 ? 'bg-yellow-500' : 'bg-green-500';
    
    return { score, text: strengthText, color: strengthColor };
  };

  const strength = showStrength ? getPasswordStrength(value) : null;

  return (
    <div className="block">
      <label htmlFor={id} className="text-sm font-medium text-muted">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="block w-full rounded-md border border-border bg-slate-100/80 px-3 py-2 pr-10 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-black/40 dark:text-slate-100 dark:placeholder:text-slate-500"
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
      
      {showStrength && value && (
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Strength: <span className={`font-medium ${strength?.color === 'bg-red-500' ? 'text-red-600' : strength?.color === 'bg-yellow-500' ? 'text-yellow-600' : 'text-green-600'}`}>
                {strength?.text}
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
            <div
              className={`h-1 rounded-full transition-all duration-300 ${strength?.color}`}
              style={{ width: `${(strength?.score || 0) * 20}%` }}
            />
          </div>
        </div>
      )}
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      
      {showStrength && !value && (
        <p className="mt-1 text-xs text-slate-500">
          Use at least 8 characters with uppercase, lowercase, and a number.
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
