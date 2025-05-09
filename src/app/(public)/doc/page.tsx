"use client";

import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import {
  home,
  public_messaging,
  guest_message_form,
  room_access_form,
  web_room_tab,
  web_guest_tab,
} from "@/assets/images/index";

import {
  auth_ask,
  change_mode,
  login_page,
  delete_message_alert,
  edit_publicId_01,
  edit_publicId_02,
  edit_publicId_03,
  guest_message_more_option,
  guest_message_recieved,
  guest_sending_01,
  guest_sending_02,
  guest_sending_03,
  mode_changed,
  more_button_room_message,
  profile_tab,
  public_fetching_02,
  public_fetching_03,
  room_fetching_02,
  room_fetching_03,
  room_message_01,
  room_message_02,
  room_message_03,
  room_message_tab,
  user_detials_filled,
  user_get_info,
  added_message_in_room,
} from "@/assets/images/hero_images/index";
import { delete_forward, get_started_with_nexe, public_message, room_messages, send_guest, setup_account } from "@/constant/data";
import CaptionPoints from "@/components/RenderCaption";

const dummyImage = web_room_tab;

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  imageSrc?: StaticImageData | StaticImageData[];
  imageAlt?: string;
  imageRatio?: "16:10" | "9:16";
  step?: boolean;
  captions?: string[];  // Added captions array
}

const Section: FC<SectionProps> = ({
  title,
  id,
  children,
  imageSrc,
  imageAlt,
  imageRatio,
  step,
  captions,
}) => (
  <div id={id} className="mb-24 scroll-mt-24">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="flex flex-col gap-8">
      <div className="w-full text-lg text-gray-700 dark:text-gray-300 space-y-4">
        {children}
      </div>

      {imageSrc && !Array.isArray(imageSrc) && (
        <div
          className={`w-full md:flex items-start max-w-xl mx-auto ${
            imageRatio === "9:16" ? "aspect-[9/16] h-[450px]" : "aspect-[16/10]"
          } relative`}
        >
          <Image
            src={imageSrc || dummyImage}
            alt={imageAlt || title}
            fill
            className="object-contain rounded-xl shadow-xl"
          />
          {/* Ensure caption is displayed below the image */}
          {captions && captions[0] && (
            <CaptionPoints captions={captions} idx={0} />
          )}
        </div>
      )}

      {Array.isArray(imageSrc) && step && (
        <div className="w-full md:flex flex-col gap-6">
          {imageSrc.map((img, idx) => (
            <div
              key={idx}
              className=" md:flex items-start p-2"
            >
              <div className={`w-full flex-1 max-w-xl mx-auto ${
                imageRatio === "9:16" ? "aspect-[9/16] h-52 w-52" : "aspect-[16/10]"
              } relative`}>
                <Image
                  src={img || dummyImage}
                  alt={`${title} - Step ${idx + 1}`}
                  fill
                  className="object-contain p-2 rounded-xl shadow-xl"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                  Step {idx + 1}
                </div>
              </div>
               {/* Ensure captions appear below the images */}
               {captions && <CaptionPoints captions={captions} idx={idx} />}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);



const sections = [
  {
    id: "getting-started",
    title: "Getting Started with Nexe",
    images: [home, login_page],
    captions: get_started_with_nexe,
  },
  {
    id: "setup-account",
    title: "Setup Nexe Account",
    images: [login_page, auth_ask, user_get_info, user_detials_filled],
    captions: setup_account,
  },
  {
    id: "send-guest",
    title: "Send Guest Message from Website",
    images: [
      web_guest_tab,
      guest_message_form,
      guest_sending_01,
      guest_sending_02,
      guest_sending_03,
      guest_message_recieved,
    ],
    captions: send_guest,
  },
  {
    id: "delete-forward",
    title: "Delete or Forward Message in App",
    images: [
      guest_message_recieved,
      guest_message_more_option,
      delete_message_alert,
    ],
    captions: delete_forward,
  },
  {
    id: "room-messages",
    title: "Room Messages",
    images: [
      room_message_tab,
      room_message_01,
      room_message_02,
      room_message_03,
      added_message_in_room,
      web_room_tab,
      room_access_form,
      room_fetching_02,
      room_fetching_03,
    ],
    captions: room_messages,
  },
  {
    id: "public-messages",
    title: "Public Messages",
    images: [
      added_message_in_room,
      more_button_room_message,
      change_mode,
      mode_changed,
      profile_tab,
      edit_publicId_01,
      edit_publicId_02,
      edit_publicId_03,
      web_room_tab,
      public_messaging,
      public_fetching_02,
      public_fetching_03,
    ],
    captions: public_message,
  },
];

const Documentation: FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Adjust based on your layout
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex relative flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-full md:w-[225px] px-4 py-10 sticky top-20 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-transparent">
        <nav className="space-y-4 text-gray-800 dark:text-gray-200 text-sm font-medium">
          <h2 className="text-lg font-semibold mb-4">Documentation</h2>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block font-thin transition-colors ${activeSection === section.id
                  ? "text-orange-500 font-semibold"
                  : "text-gray-800 dark:text-gray-200 hover:text-white"
                }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-12 py-12 relative max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-indigo-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
        </div>

        {sections.map(({ id, title, images, captions }) => (
          <Section key={id} id={id} title={title} imageSrc={images} step captions={captions}>
            <p>Details for {title}...</p>
          </Section>
        ))}
      </main>
    </div>
  );
};

export default Documentation;
