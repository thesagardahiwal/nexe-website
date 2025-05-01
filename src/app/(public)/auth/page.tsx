import Link from "next/link";

export default function AuthChoice() {

  return (
    <main
      className="flex flex-col justify-center items-center h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden"
      role="main"
      aria-label="Authentication Choice Page"
    >
      {/* Decorative Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Heading */}
      <div
        className="z-10 text-center mb-6"
        role="region"
        aria-labelledby="auth-heading"
      >
        <h1 id="auth-heading" className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Welcome to Nexe
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="z-10 max-w-xl text-center text-lg text-gray-700 dark:text-gray-300 mb-8"
        aria-label="authentication options description"
      >
        Continue as a guest or sign in (on Mobile) to unlock full features.
      </p>

      {/* Buttons */}
      <section className="w-full max-w-sm z-10" role="region" aria-labelledby="auth-options">
        <h2 id="auth-options" className="sr-only">Authentication Options</h2>
        <div className="flex flex-col space-y-4">
          <Link href={"/guest"}
            className="w-full bg-gray-700 text-white px-6 py-3 rounded-full shadow-md font-semibold text-center hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Continue as Guest"
          >
            Continue as Guest
          </Link>
        </div>
      </section>
    </main>
  );
}
