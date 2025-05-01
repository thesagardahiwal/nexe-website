import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import {
  home,
  home_tab,
  public_messaging,
  guest_message_form,
  web_guest_messaging,
  select_media,
  room_access_form,
  room_messages_accesed,
  web_room_tab,
  guest_tab,
  web_guest_tab,
} from "@/assets/images/index";

import {
  auth_ask,
    change_mode,
    change_public_id_confirmation,
    delete_message_alert,
    edit_publicId_01,
    edit_publicId_02,
    edit_publicId_03,
    guest_forward,
    guest_message_more_option,
    guest_message_recieved,
    guest_sending_01,
    guest_sending_02,
    guest_sending_03,
    login_page,
    mode_changed,
    more_button_room_message,
    profile_details,
    profile_tab,
    profile_updated,
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
} from "@/assets/images/hero_images/index"

// Dummy image for placeholder
const dummyImage = web_room_tab;

// Reusable Section Component
interface SectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc?: StaticImageData | StaticImageData[];
  imageAlt?: string;
  imageRatio?: "16:10" | "9:16";
  step?: boolean;
}

const Section: FC<SectionProps> = ({ title, children, imageSrc, imageAlt, imageRatio, step }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="flex flex-col gap-8">
      <div className="w-full text-lg text-gray-700 dark:text-gray-300 space-y-4">
        {children}
      </div>
      {imageSrc && !Array.isArray(imageSrc) && (
        <div
          className={`w-full  max-w-xl mx-auto ${
            imageRatio === "9:16" ? "aspect-[9/16] h-[450px]" : "aspect-[16/10]"
          } relative`}
        >
          <Image
            src={imageSrc || dummyImage}
            alt={imageAlt || title}
            fill
            className="object-contain rounded-xl shadow-xl"
          />
        </div>
      )}
      {Array.isArray(imageSrc) && step && (
        <div className="w-full flex-wrap flex items-center justify-evenly">
          {imageSrc.map((img, idx) => (
            <div key={idx} className={`m-3 ${
              imageRatio === "9:16" ? "aspect-[9/16] h-[450px] w-[300px]" : "aspect-[16/10] h-auto w-[500px]"
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
              {idx < imageSrc.length - 1 && (
                <div className="flex justify-center mt-2">
                  <span className="text-2xl text-gray-500">⬇️</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Documentation: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-indigo-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* First Session */}
      <Section title="Getting Started with Nexe" imageSrc={[home, login_page]} step>
        <p>
          Nexe is a document sharing and secure messaging app made for college students to easily transfer lab files from shared devices to personal devices.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Visit <a href="https://nexe.vercel.app" className="text-blue-500 hover:underline">nexe.vercel.app</a>, download the app and sign up.</li>
          <li>Create a Private ID and Username to begin.</li>
          <li>Send and receive messages anonymously from website — no login required for guests!</li>
        </ol>
      </Section>

      {/* Second Session */}
      <Section title="Setup Nexe Account" imageSrc={[login_page, auth_ask, user_get_info, user_detials_filled]} step>
        <p>Follow these steps to set up your Nexe account through the app:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Download the app and open it.</li>
          <li>Enter your name and create a Private ID.</li>
          <li>Save your profile and start using Nexe!</li>
        </ol>
      </Section>

      {/* Third Session */}
      <Section title="Send Guest Message from Website" imageSrc={[web_guest_tab, guest_message_form, select_media, guest_sending_01, guest_sending_02, guest_sending_03, guest_message_recieved]} step>
        <p>Follow these steps to send a guest message from the website:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go to <a href="https://nexe.vercel.app" className="text-blue-500 hover:underline">Nexe's website</a> and navigate to the guest messaging page.</li>
          <li>Fill out your Private ID and message details in the form.</li>
          <li>Click send — a success message will appear!</li>
        </ol>
      </Section>

      {/* Fourth Session */}
      <Section title="Delete or Forward Message in App" imageSrc={[guest_message_recieved, guest_message_more_option, delete_message_alert]} step>
        <p>From the app, you can delete or forward guest messages:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go to the messages tab and click on the more button next to a message.</li>
          <li>Select "Forward" to send it to another contact or delete the message permanently.</li>
        </ol>
      </Section>

      {/* Fifth Session */}
      <Section title="Room Messages" imageSrc={[room_message_tab, room_message_01, room_message_02, room_message_03, added_message_in_room, web_room_tab, room_access_form, room_fetching_02, room_fetching_03]} step>
        <p>Access your room messages using the app and the web:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>In the app, add messages to a room.</li>
          <li>On the web, go to the "Room" page, fill in your Private ID and contact details, and access the messages stored in the room.</li>
        </ol>
      </Section>

      {/* Sixth Session */}
      <Section title="Public Messages" imageSrc={[added_message_in_room, more_button_room_message, change_mode, mode_changed, profile_tab, edit_publicId_01, edit_publicId_02, edit_publicId_03, web_room_tab, public_messaging, public_fetching_02, public_fetching_03]} step>
        <p>Make messages public with a toggle option:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>In the app, go to your room messages, click the more button, and toggle to make a message public.</li>
          <li>On the web, click "Fetch Public Messages" and enter the Public ID to view the message.</li>
        </ol>
      </Section>

      {/* Seventh Session */}
      <Section title="Guest Message and Room Integration" imageSrc={[guest_message_more_option, more_button_room_message]} step>
        <p>Directly push guest messages into a room and vice versa:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>From the web, send a guest message and select the option to add it to a room.</li>
          <li>View and share room messages from the app as guest messages.</li>
        </ol>
      </Section>

    </div>
  );
};

export default Documentation;
