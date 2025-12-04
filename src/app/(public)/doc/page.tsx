"use client";

import { FC } from "react";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ title, id, children }) => (
  <div id={id} className="mb-24 scroll-mt-24">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg space-y-4">
      {children}
    </div>
  </div>
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

const Documentation: FC = () => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-full md:w-[225px] px-4 py-10 sticky top-20 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-700">
        <nav className="space-y-4 text-gray-800 dark:text-gray-200 text-sm font-medium">
          <h2 className="text-lg font-semibold mb-4">Documentation</h2>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block transition-colors font-medium text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400`}

            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full px-6 py-12 max-w-5xl mx-auto">
        {sections.map(({ id, title, content }) => (
          <Section key={id} id={id} title={title}>
            <ul className="list-disc list-inside space-y-2">
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        ))}
      </main>
    </div>
  );
};

export default Documentation;
