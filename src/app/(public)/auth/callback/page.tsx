'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Get query params from URL (Appwrite response)
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("sessionId"); // Extract sessionId
    const error = params.get("error"); // Extract error (if any)

    if (error) {
      console.error("OAuth Authentication Failed");
      router.push("/auth"); // Redirect to login on failure
      return;
    }

    if (sessionId) {
      // Deep link to mobile app with session data
      const appLink = `nexe://auth-callback?sessionId=${sessionId}`;
      const fallbackLink = "https://play.google.com/store/apps/details?id=com.nexeapp"; // Fallback link for Android
      const iosFallbackLink = "https://apps.apple.com/us/app/nexe/id123456789"; // Fallback link for iOS

      // Redirect to app immediately using deep link
      window.location.href = appLink;

      // Set a timeout to redirect to the app store if app isn't opened after 1 second
      setTimeout(() => {
        // Check for iOS or Android and redirect to the correct app store
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          window.location.href = iosFallbackLink; // Redirect to iOS App Store
        } else {
          window.location.href = fallbackLink; // Redirect to Google Play Store
        }
      }, 1000); // Timeout after 1 second
    }
  }, []);

  useEffect(() => {
    // Check if user is on a mobile device (Android or iOS)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // App deep link for mobile devices
      const appLink = "nexe://app"; // Customize with your app's deep link scheme
      const fallbackLink = "https://play.google.com/store/apps/details?id=com.nexeapp"; // Google Play Store fallback
      const iosFallbackLink = "https://apps.apple.com/us/app/nexe/id123456789"; // iOS App Store fallback

      // Redirect to app deep link on mobile
      window.location.href = appLink;

      // Set a timeout to redirect to the correct app store if the app isn't opened
      setTimeout(() => {
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          window.location.href = iosFallbackLink; // iOS app store
        } else {
          window.location.href = fallbackLink; // Android app store
        }
      }, 1000); // Timeout after 1 second
    }
  }, []);

  return (
    <div className="flex-1 flex-col items-start flex p-10 justify-center">
      <p className="font-semibold dark:text-white text-black text-3xl">Authenticating...</p>
      <p>If you're not redirected, <a href="nexe://app" className="text-blue-400">click here</a> to open the app.</p>
    </div>
  );
}
