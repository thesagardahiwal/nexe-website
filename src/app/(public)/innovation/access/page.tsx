import type { Metadata } from "next";
import AccessClient from "./AccessClient";

export const metadata: Metadata = {
  title: "Student Innovation Program",
  description:
    "Submit projects to the Nexe Technologies Student Innovation Program – Cycle 01.",
};

export default function InnovationAccessPage() {
  return <AccessClient />;
}
