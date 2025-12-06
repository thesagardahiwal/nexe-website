'use client';

import { encryptMessage } from '@/utils/encryption';
import React, { useState } from 'react';

type Step = 1 | 2;

interface FormState {
  username: string;
  password: string;
  confirmPassword: string;
  privateId: string;
  publicId: string;
}

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>({
    username: '',
    password: '',
    confirmPassword: '',
    privateId: '',
    publicId: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // --- Validation helpers ---
  const validateStep1 = async (): Promise<boolean> => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.username.trim()) {
      e.username = 'Username is required.';
    } else if (!/^[a-zA-Z0-9_.-]{3,30}$/.test(form.username)) {
      e.username = 'Username must be 3–30 characters and contain only letters, numbers, . _ -';
    }

    if (!form.password) {
      e.password = 'Password is required.';
    } else {
      // password strength: min 8 chars, at least one uppercase, lowercase, digit
      const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!strong.test(form.password)) {
        e.password =
          'Password must be at least 8 characters with uppercase, lowercase and a number.';
      }
    }

    if (!form.confirmPassword) {
      e.confirmPassword = 'Please confirm your password.';
    } else if (form.password !== form.confirmPassword) {
      e.confirmPassword = 'Passwords do not match.';
    };

    const response = await fetch('/api/auth/av', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: encryptMessage(form.username.trim()) }),
    });

    const data = await response.json();
    if (data.data?.isUsernameExist) {
      e.username = 'Username is already taken.';
    };

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = async (): Promise<boolean> => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.privateId.trim()) {
      e.privateId = 'Private ID is required.';
    } else if (!/^[a-zA-Z0-9_-]{6,40}$/.test(form.privateId)) {
      e.privateId = 'Private ID must be 6–40 chars, letters/numbers/_/- only.';
    }

    if (!form.publicId.trim()) {
      e.publicId = 'Public ID is required.';
    } else if (!/^[a-zA-Z0-9_-]{4,40}$/.test(form.publicId)) {
      e.publicId = 'Public ID must be 4–40 chars, letters/numbers/_/- only.';
    }

    const response = await fetch('/api/auth/av', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        privateId: encryptMessage(form.privateId.trim()), 
        publicId: encryptMessage(form.publicId.trim())
     }),
    });

    const data = await response.json();
    if (data.data?.isPrivateIdExist) {
      e.privateId = 'Private ID is already in use.';
    };
    if (data.data?.isPublicIdExist) {
      e.publicId = 'Public ID is already in use.';
    };
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // --- Utility: generate random ID (human-friendly-ish) ---
  const generateId = (len = 8) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < len; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
  };

  // --- Step actions ---
  const handleNext = async () => {
    setMessage(null);
    const valid = await validateStep1();
    if (valid) {
      setStep(2);
      setErrors({});
    }
  };

  const handleBack = () => {
    setMessage(null);
    setStep(1);
  };

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleGeneratePrivateId = () => {
    setForm((prev) => ({ ...prev, privateId: `pvt-${generateId(10)}` }));
    setErrors((prev) => ({ ...prev, privateId: undefined }));
  };

  const handleGeneratePublicId = () => {
    setForm((prev) => ({ ...prev, publicId: `pub-${generateId(6)}` }));
    setErrors((prev) => ({ ...prev, publicId: undefined }));
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard.');
      setTimeout(() => setMessage(null), 2000);
    } catch {
      setMessage('Unable to copy. Please copy manually.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // --- Final submit ---
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setMessage(null);

    const valid = await validateStep2();
    if (!valid) {
      return;
    }

    setLoading(true);
    try {
      // Example payload. The backend should hash the password, enforce uniqueness, etc.
      const payload = {
        username: form.username.trim(),
        password: form.password,
        privateId: form.privateId.trim(),
        publicId: form.publicId.trim(),
      };

      // Replace endpoint with your real API route
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('Account created successfully. You can now sign in.');
        setForm({
          username: '',
          password: '',
          confirmPassword: '',
          privateId: '',
          publicId: '',
        });
        setStep(1);
      } else {
        const data = await res.json().catch(() => ({}));
        setMessage(data?.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-transparent p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Create your Nexe account
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Two-step secure and anonymous account setup. You control your IDs.
          </p>
        </header>

        <div className="mb-6">
          <nav className="flex items-center gap-4">
            <div
              className={`flex-1 py-2 px-3 rounded-lg text-center ${
                step === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Step 1 — Account
            </div>
            <div
              className={`flex-1 py-2 px-3 rounded-lg text-center ${
                step === 2
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              Step 2 — IDs
            </div>
          </nav>
        </div>

        {/* Form area */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <section aria-labelledby="step-1-title">
              <h2 id="step-1-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Account details
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Username
                  </span>
                  <input
                    type="text"
                    value={form.username}
                    onChange={handleChange('username')}
                    aria-invalid={!!errors.username}
                    aria-describedby={errors.username ? 'username-error' : undefined}
                    className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="choose a username"
                    autoComplete="off"
                  />
                  {errors.username && (
                    <p id="username-error" className="mt-1 text-sm text-red-600">
                      {errors.username}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Password</span>
                  <input
                    type="password"
                    value={form.password}
                    onChange={handleChange('password')}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="At least 8 characters"
                  />
                  {errors.password && (
                    <p id="password-error" className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Use at least 8 characters with uppercase, lowercase, and a number.
                  </p>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Confirm Password</span>
                  <input
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={errors.confirmPassword ? 'confirm-error' : undefined}
                    className="mt-1 block w-full border rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Repeat your password"
                  />
                  {errors.confirmPassword && (
                    <p id="confirm-error" className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </label>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div />
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Continue to IDs
                </button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section aria-labelledby="step-2-title">
              <h2 id="step-2-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Choose your IDs
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Private ID</span>
                  <div className="mt-1 flex gap-2">
                    <input
                      type="text"
                      value={form.privateId}
                      onChange={handleChange('privateId')}
                      aria-invalid={!!errors.privateId}
                      aria-describedby={errors.privateId ? 'privateId-error' : undefined}
                      className="flex-1 rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="e.g., pvt-yourid (6-40 chars)"
                    />
                    <button
                      type="button"
                      onClick={handleGeneratePrivateId}
                      className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm"
                    >
                      Generate
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopy(form.privateId)}
                      disabled={!form.privateId}
                      className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm disabled:opacity-50"
                    >
                      Copy
                    </button>
                  </div>
                  {errors.privateId && (
                    <p id="privateId-error" className="mt-1 text-sm text-red-600">
                      {errors.privateId}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Keep your Private ID secret — it is used to receive private messages and files.
                  </p>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Public ID</span>
                  <div className="mt-1 flex gap-2">
                    <input
                      type="text"
                      value={form.publicId}
                      onChange={handleChange('publicId')}
                      aria-invalid={!!errors.publicId}
                      aria-describedby={errors.publicId ? 'publicId-error' : undefined}
                      className="flex-1 rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="e.g., publicname (4-40 chars)"
                    />
                    <button
                      type="button"
                      onClick={handleGeneratePublicId}
                      className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm"
                    >
                      Generate
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopy(form.publicId)}
                      disabled={!form.publicId}
                      className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm disabled:opacity-50"
                    >
                      Copy
                    </button>
                  </div>
                  {errors.publicId && (
                    <p id="publicId-error" className="mt-1 text-sm text-red-600">
                      {errors.publicId}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Public ID is optional for sharing public messages. Choose carefully — it will be visible to others.
                  </p>
                </label>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                >
                  Back
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition disabled:opacity-60"
                  >
                    {loading ? 'Creating account...' : 'Create Account'}
                  </button>
                </div>
              </div>
            </section>
          )}
        </form>

        {/* Message / feedback */}
        {message && (
          <div className="mt-6 px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            {message}
          </div>
        )}

        {/* Small note */}
        <p className="mt-6 text-xs text-gray-500">
          By creating an account you agree to Nexe's Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
