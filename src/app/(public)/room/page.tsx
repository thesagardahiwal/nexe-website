import { Suspense } from "react";
import PageBackground from "@/components/PageBackground";
import RoomClient from "./RoomClient";

export default function RoomPage() {
  return (
    <Suspense
      fallback={
        <main className="page-shell">
          <PageBackground />
          <section className="page-hero">
            <div className="page-container">
              <div className="text-sm text-muted">Loading room workspace...</div>
            </div>
          </section>
        </main>
      }
    >
      <RoomClient />
    </Suspense>
  );
}
