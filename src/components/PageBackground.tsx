export default function PageBackground() {
  return (
    <div className="absolute inset-0 animate-fade-in" aria-hidden="true">
      <div className="absolute -top-40 left-10 h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute top-40 right-10 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
    </div>
  );
}
