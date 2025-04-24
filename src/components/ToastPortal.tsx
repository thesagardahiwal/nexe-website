import { Toaster } from 'react-hot-toast';

export default function ToastPortal() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}                 // distance between stacked toasts
      containerStyle={{ zIndex: 9999 }}  // make sure it stays on top
      toastOptions={{
        duration: 3500,
        className: 'group overflow-hidden shadow-xl rounded-xl',
        style: {
          padding: '12px 16px',
          fontSize: '0.875rem',
          fontWeight: 500,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          background:
            'linear-gradient(135deg, hsla(220,10%,20%,0.85), hsla(220,10%,15%,0.85))',
          color: '#f3f4f6',
          border: '1px solid hsla(220,10%,40%,0.35)',
        },
        // different accents per type
        success: {
          iconTheme: {
            primary: '#34d399',  // emerald‑400
            secondary: '#1e293b', // slate‑800
          },
        },
        error: {
          iconTheme: {
            primary: '#f87171',  // rose‑400
            secondary: '#1e293b',
          },
        },
        loading: {
          iconTheme: {
            primary: '#60a5fa',  // blue‑400
            secondary: '#1e293b',
          },
        },
      }}
    />
  );
}
