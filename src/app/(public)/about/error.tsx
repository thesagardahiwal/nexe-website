"use client";
export default function Error({ error }: { error: Error }) {
  return <p>Error: {error.message}</p>;
}
