'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("sessionId");
    const error = params.get("error");

    if (error) {
      console.error("OAuth Authentication Failed");
      router.push("/auth");
      return;
    }

    if (sessionId) {
      const appLink = `nexe://auth-callback?sessionId=${sessionId}`;
      const fallbackLink = "https://play.google.com/store/apps/details?id=com.nexeapp";
      const iosFallbackLink = "https://apps.apple.com/us/app/nexe/id123456789";

      window.location.href = appLink;

      setTimeout(() => {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = iosFallbackLink;
        } else {
          window.location.href = fallbackLink;
        }
      }, 1000);
    }
  }, [router]); // ✅ Added router as a dependency

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const appLink = "nexe://app";
      const fallbackLink = "https://play.google.com/store/apps/details?id=com.nexeapp";
      const iosFallbackLink = "https://apps.apple.com/us/app/nexe/id123456789";

      window.location.href = appLink;

      setTimeout(() => {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = iosFallbackLink;
        } else {
          window.location.href = fallbackLink;
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="flex-1 flex-col items-start flex p-10 justify-center">
      <p className="font-semibold dark:text-white text-black text-3xl">Authenticating...</p>
      <p>
        If you&apos;re not redirected,{" "}
        <a href="nexe://app" className="text-blue-400">click here</a> to open the app.
      </p>
    </div>
  );
}
