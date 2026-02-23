import { Suspense } from "react";
import PageBackground from "@/components/PageBackground";
import GuestClient from "./GuestClient";

export default function GuestPage() {
  return (
    <Suspense
      fallback={
        <main className="page-shell">
          <PageBackground />
          <section className="page-hero">
            <div className="page-container">
              <div className="text-sm text-muted">Loading guest messaging...</div>
            </div>
          </section>
        </main>
      }
    >
      <GuestClient />
    </Suspense>
  );
}
