"use client";

import PageBackground from "@/components/PageBackground";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => (
  <section id={id} className="scroll-mt-28">
    <div className="glass-card p-6 md:p-8 animate-fade-up anim-delay-200">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-4 text-slate-300 text-base sm:text-lg space-y-4">
        {children}
      </div>
    </div>
  </section>
);

const sections = [
  {
    id: "getting-started",
    title: "Getting Started with Nexe",
    content: [
      "Visit the Nexe website or app.",
      "Use your private ID to start messaging instantly.",
      "No account creation or login required.",
    ],
  },
  {
    id: "setup-account",
    title: "Setup Nexe Account",
    content: [
      "Optionally, you can create a Nexe account for syncing messages across devices.",
      "Provide minimal details and verify your account.",
      "Once set up, your messages and media will sync securely.",
    ],
  },
  {
    id: "send-guest",
    title: "Send Guest Message",
    content: [
      "Enter the recipient's private ID in the guest message form.",
      "Type your message or attach files.",
      "Send instantly without any sign-ups.",
      "Recipient can read and reply using their private ID.",
    ],
  },
  {
    id: "delete-forward",
    title: "Delete or Forward Messages",
    content: [
      "Select the message you want to manage.",
      "You can delete or forward the message to another private ID.",
      "All actions are secure and private.",
    ],
  },
  {
    id: "room-messages",
    title: "Room Messages",
    content: [
      "Create a private room to chat with multiple users.",
      "Invite participants via private IDs.",
      "Send messages, media, and manage conversations securely.",
    ],
  },
  {
    id: "public-messages",
    title: "Public Messages",
    content: [
      "Access public channels to read messages.",
      "You can also post messages anonymously if allowed.",
      "Public messages are viewable to all participants in the channel.",
    ],
  },
];

const Documentation = () => {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-2xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Documentation
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              Nexe Product Guide
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Quick reference for anonymous sharing, guest messaging, and room
              workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="glass-card p-5 sticky top-28">
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Contents
              </h2>
              <nav className="mt-5 space-y-3 text-sm text-slate-300">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="glass-card p-4 lg:hidden">
              <div className="flex gap-3 overflow-x-auto text-sm text-slate-300">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 hover:border-white/30 hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>

            {sections.map(({ id, title, content }) => (
              <Section key={id} id={id} title={title}>
                <ul className="list-disc list-inside space-y-2">
                  {content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Documentation;
