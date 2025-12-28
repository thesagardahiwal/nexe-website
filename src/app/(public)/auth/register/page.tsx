'use client';

import { encryptMessage } from '@/utils/encryption';
import React, { useState } from 'react';

import PasswordInput from '@/components/PasswordInput';
import StepIndicator from '@/components/StepIndicator';
import IDInputField from '@/components/IDInputField';
import TextInput from '@/components/TextInput';

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

  const validateEmail = (username: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username + "@nexeusers.com");
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/;
    return usernameRegex.test(username);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  // --- Validation helpers ---
  const validateStep1 = async (): Promise<boolean> => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.username.trim()) {
      e.username = 'Username is required.';
    } else if (!validateUsername(form.username.trim())) {
      e.username = 'Username must be 3–30 characters and contain only letters, numbers, dots or underscores, starting with a letter.';
    }

    if (!form.password) {
      e.password = 'Password is required.';
    } else {
      if (!validatePassword(form.password)) {
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
    };



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
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: key === 'username' ? e.target.value.toLowerCase() : e.target.value }));
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
      const payload = {
        username: encryptMessage(form.username.trim()),
        password: encryptMessage(form.password.trim()),
        privateId: encryptMessage(form.privateId.trim()),
        publicId: encryptMessage(form.publicId.trim()),
      };

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('Account created successfully.');
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

  const steps = [
    { label: 'Step 1 — Account', description: 'Basic credentials' },
    { label: 'Step 2 — IDs', description: 'Private & Public IDs' }
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-transparent p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            Create your Nexe account
          </h1>
          <p className="mt-1 sm:mt-2 text-sm text-gray-600 dark:text-gray-300">
            Two-step secure and anonymous account setup. You control your IDs.
          </p>
        </header>

        <StepIndicator currentStep={step} steps={steps} />

        {/* Form area */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <section aria-labelledby="step-1-title">
              <h2 id="step-1-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Account details
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <TextInput
                  label="Username"
                  value={form.username}
                  onChange={handleChange('username')}
                  error={errors.username}
                  placeholder="choose a username"
                  id="username"
                  required
                />

                <PasswordInput
                  label="Password"
                  value={form.password}
                  onChange={handleChange('password')}
                  error={errors.password}
                  placeholder="At least 8 characters"
                  id="password"
                  showStrength={true}
                />

                <PasswordInput
                  label="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={errors.confirmPassword}
                  placeholder="Repeat your password"
                  id="confirmPassword"
                />
              </div>

              <div className="flex items-center justify-between mt-6 sm:mt-8">
                <div />
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Continue to IDs
                </button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section aria-labelledby="step-2-title">
              <h2 id="step-2-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Choose your IDs
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <IDInputField
                  label="Private ID"
                  value={form.privateId}
                  onChange={handleChange('privateId')}
                  onGenerate={handleGeneratePrivateId}
                  onCopy={() => handleCopy(form.privateId)}
                  error={errors.privateId}
                  placeholder="e.g., pvt-yourid (6-40 chars)"
                  description="Keep your Private ID secret — it is used to receive private messages and files."
                  id="privateId"
                />

                <IDInputField
                  label="Public ID"
                  value={form.publicId}
                  onChange={handleChange('publicId')}
                  onGenerate={handleGeneratePublicId}
                  onCopy={() => handleCopy(form.publicId)}
                  error={errors.publicId}
                  placeholder="e.g., publicname (4-40 chars)"
                  description="Public ID is optional for sharing public messages. Choose carefully — it will be visible to others."
                  id="publicId"
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
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
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          By creating an account you agree to Nexe&apos;s Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}