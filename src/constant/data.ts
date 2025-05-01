export const get_started_with_nexe = [
    "The Nexe website is the central hub for students to access and understand the Nexe platform. Designed with a clean and modern interface, the homepage guides users through key features like downloading the app, sending guest messages, and accessing Room messages—all without requiring a login. Nexe is built for college students to share files like assignments and lab reports quickly and securely. It supports anonymous guest messaging and easy file transfers from lab devices to personal phones. The homepage includes clear calls to action, privacy info, and documentation, making it easy for users to get started in seconds.",
    "After visiting the Nexe website, users are encouraged to download the mobile application from the Google Play Store. Once installed, opening the app brings you to the login screen shown in this image. The login page is designed with simplicity in mind, allowing students to quickly access their Nexe account. This is essential for users who want to manage their received messages, upload resources to public or private channels, or organize their academic content. New users can easily sign up by following a streamlined registration process, while returning users can log in securely using their credentials. From here, they gain full access to Nexe’s powerful messaging and document-sharing features."
];

export const setup_account = [
    "This is the initial login page users encounter when opening the Nexe app. It’s designed to be clean and focused, helping users get started with minimal friction. As Nexe is an academic tool primarily used by college students, the app allows you to quickly log in using your Google account. This ensures that the authentication process is secure, efficient, and familiar. The login page includes branding elements from Nexe and provides visual continuity with the website. From here, users can proceed to authenticate their account, after which the app fetches their basic profile details and prepares the app environment for further setup. For first-time users, this step is crucial as it initiates account creation and connects your usage to your student identity securely.",
    "After tapping on the login button, you will be prompted to authorize Nexe to access your Google account. This is a standard OAuth process, where you allow Nexe limited access to your name, email, and profile picture—essential for identifying you within the app and associating your data safely. This screen ensures transparency about what information is being accessed. By using Google Sign-In, Nexe avoids the need to create and manage additional passwords, thereby improving security and user experience. Once permission is granted, you're redirected back to the app to continue the setup process.",
    "Once logged in, you are prompted to complete your profile using a simple form. This step is vital for the functioning of Nexe's core features. The form includes fields for a username, private ID, contact number, and an optional bio. The username is displayed publicly, the private ID allows others to send you secure guest messages, and the contact number is used for verification or in-app communication. The intuitive design makes it easy to fill out, with hints provided for each field. Completing this ensures your account is personalized and ready for interaction on Nexe.",
    "This image shows a completed form, indicating that all required fields have been filled successfully. At this point, your Nexe account is officially set up. The private ID you've chosen will now be your unique identifier in the system, enabling others to send you guest messages or connect with you in rooms. The setup ensures all essential data is stored securely, and you can now begin using all of Nexe’s messaging, sharing, and file transfer features seamlessly. After submitting, the app will redirect you to the main dashboard or relevant messaging tab based on your usage needs."
];

export const send_guest = [
    "This image shows the Guest Message tab on the Nexe website interface. From here, users can send a message to any Nexe user using their Private ID, without needing to log in. This makes it incredibly easy to share messages or documents, especially when you’re using a shared or public system like a college lab. A prominent "+" (plus) button is visible, allowing you to begin the guest message process. This tab is thoughtfully designed with a clean UI, encouraging quick interaction while maintaining the privacy-focused structure that Nexe is built upon. Whether you’re a student sending an assignment or a guest providing feedback, this is your entry point.",
    "When you click the "+" button on the Guest tab, a modal form appears where you can input the required details to send a guest message. The form includes a Private ID field (which uniquely identifies the recipient), a message text area for typing your message, and a media attachment section. The form is minimal yet functional, supporting attachments like images, videos, or documents. A key feature here is that you can attach multiple media files—but only one type at a time. This keeps the structure organized and ensures better compatibility on the recipient’s side. This image captures the form before submission.",
    "In this step, the guest message form has been filled out properly. The Private ID of the recipient is entered, the message text is typed, and media has been attached. This form is the last checkpoint before submission. Everything is set, and the UI visually confirms your readiness to proceed. It's a good moment to review the content and ensure the correct files and Private ID are entered before sending.",
    "Once you press the 'Send' button, the guest message starts uploading. This image reflects the message-sending process in real-time. The app uploads both the message text and media files to the server, and you’re advised not to close the tab during this process. A subtle loader or transition indicates that your message is being processed and securely routed to the intended recipient through Nexe’s backend.",
    "After the message has been sent successfully, a toast notification appears confirming that the message was delivered. This visual feedback ensures that the user understands the operation was completed successfully. It improves trust and usability by removing ambiguity about whether the message went through. Behind the scenes, Nexe securely stores the data and triggers a notification to the recipient's app.",
    "This image shows the Nexe mobile app interface, where the recipient receives the guest message. The app not only displays the message in the Guest tab but also notifies the user with a push notification. This ensures messages aren’t missed, even if the app is in the background. The received message includes the attached media and text content, maintaining the integrity of the guest's input. This seamless bridge between web and mobile highlights Nexe’s strength in document and message sharing—especially designed for student collaboration and quick, frictionless communication.",
];

export const delete_forward = [
    "This image displays the Guest tab within the Nexe mobile app, where all guest messages are conveniently listed. Every message sent using the web-based guest form appears here in real time. Users are notified upon message arrival and can view the content, including any attached media, directly in this section. The Guest tab is designed to keep unlinked or public communications separate from private chats or rooms, providing a clear distinction and maintaining organizational clarity. Whether a user receives an assignment from a lab computer or a quick note from a peer, this is the central hub to access those guest communications.",
    "In this screen, we highlight the extended options available for any received guest message. Tapping on the three vertical dots (⋮) in the top-right corner of the message card reveals a set of actions the user can perform. The available options include: 1. Delete – Permanently remove the message. 2. Push into Room – Move the message into a saved Room for future reference or collaboration. These options provide flexibility in how messages are handled post-receipt, supporting better user control and efficient message management.",
    "This final image shows the confirmation prompt that appears when a user attempts to delete a guest message. Nexe takes message deletion seriously—once a message is deleted, it is permanently removed from the app and not recoverable. This irreversible action is designed to protect user intent and ensure data privacy. The alert popup asks, “Are you sure you want to delete this message?” with a clear call-to-action to either cancel or proceed. If confirmed, the message is removed from both the UI and the Nexe backend, ensuring no trace remains."
];

export const room_messages = [
    // Image 1
    "This screen displays the Room tab in the Nexe application, representing the core 'history maker' feature of the platform. The Room tab is a special section where important guest messages can be preserved permanently. Unlike temporary guest messages, once a message is added to the Room, it becomes retrievable anytime from both the app and the web. This enables users to store valuable communications such as assignment links, lab work summaries, or important group notes for later access—creating a seamless bridge between mobile and web users. The Room tab acts like a mini archive, allowing cross-device collaboration with ease.",
  
    // Image 2
    "This screen captures the process of adding a message into the Room from the mobile app. When a user taps the '+' button on the Room screen, a message upload form appears. The form contains a text area where users can type the message they want to store, and also provides the option to attach a single type of media—such as images, videos, or documents. This ensures consistent formatting and structure for Room content. Once the message is composed and media attached, users can tap the plus button to officially upload the entry into the Room.",
  
    // Image 3
    "This image shows a fully completed Room message form. The message text area is filled with content, and media files have been selected and attached. This step represents the final review before submission. At this point, the user is ready to add this information to the Room. The clear layout and intuitive design help ensure that each message is properly structured before being preserved in the Room archive for future access.",
  
    // Image 4
    "Here, the user has tapped the plus button after completing the Room message form. The message is now being uploaded to the Room. During this time, Nexe processes the text and media, ensuring proper formatting and secure storage. This step bridges real-time content creation with long-term data accessibility. Once uploaded, the message becomes visible to all users with access to the same Private ID and Room permissions.",
  
    // Image 5
    "This screen shows the final result: the newly added message is now part of the Room and visible in the Room tab. Users can scroll through all messages added to the Room, including text, images, videos, or documents. Each message is displayed in chronological order, making it easy to retrieve specific entries based on time or content. This feature is ideal for students saving important lab results or collaborative teams preserving shared updates.",
  
    // Image 6
    "Now transitioning to the web interface, this image highlights the Nexe website's Room tab. From here, users can either send messages into the Room, access previously stored Room messages, or view public guest messages. This tab serves as a central hub for interacting with Room content from desktop browsers. It's especially useful for students or team members working from a lab, classroom, or shared computer—enabling interaction with the same Room used on the mobile app.",
  
    // Image 7
    "This screen shows the form used to access Room messages from the web. After clicking the 'Access Room Messages' button (the second option on the page), a form appears with three required fields: Username, Private ID, and Phone Number. These fields act as a basic layer of authentication, allowing users to access Room content securely without needing full account login. It ensures the Room is only accessible to those who have been granted or shared the correct Private ID.",
  
    // Image 8
    "Here, the form fields are filled in. The user has entered their Username, Private ID, and Phone Number. This step validates that the person requesting Room access has appropriate credentials, helping maintain data integrity and security. Users should ensure their input is correct, as mismatches may result in failed access or empty data retrieval.",
  
    // Image 9
    "In this final image, the user has submitted the access form and successfully fetched the Room messages from the Nexe backend. The messages stored in the Room from the mobile app are now fully visible on the web platform. This seamless sync between app and web ensures continuity of information—ideal for accessing messages from lab devices, classrooms, or personal computers without logging in. It allows Nexe to act as a bridge between mobile-first data creation and desktop-based collaboration or storage."
  ]
  

  export const public_message = [
    // Image 1
    "This screen shows a Room message that has already been added in the Nexe app. Messages inside the Room are private by default, accessible only via a secure Private ID. However, Nexe provides a unique feature where selected messages can be shared publicly. This flexibility allows you to make important messages visible to anyone with your Public ID—ideal for sharing lecture notes, event details, or announcements with a larger audience without requiring them to log in.",
  
    // Image 2
    "When you tap on the three vertical dots (More button) on any Room message, a menu appears with multiple options: Delete Message, Add to Room, Forward Message, and Toggle Public/Private. The fourth option lets you switch the visibility mode of the selected message. This is particularly useful if you want to make a message publicly accessible after it has already been stored in the Room. The toggle helps manage privacy control directly from the app UI.",
  
    // Image 3
    "By default, all Room messages are private. If you choose to toggle a message to public, a confirmation popup appears. This alert ensures that users don't accidentally expose sensitive messages. It clearly warns that the message will become accessible to anyone with the Public ID. Once confirmed, the message becomes part of the publicly visible collection, allowing easier sharing and open access from the web interface.",
  
    // Image 4
    "After confirming the public mode toggle, the message status changes. You will notice the icon next to the message updates to indicate it's now public, and a toast notification appears confirming that the message has been made public. This visual feedback ensures the user is aware of the new status and that the message is now accessible from the public message interface on the Nexe website.",
  
    // Image 5
    "To allow others to access your public messages via the Nexe website, you must set a Public ID in your profile. If you haven't done so already, go to the Profile tab in the Nexe app. Here, you will see your Public ID field along with an edit button next to it. This step is essential for connecting your mobile messages to their web-accessible version.",
  
    // Image 6
    "This screen shows the modal popup that opens when you tap the edit button next to the Public ID in your profile. The modal provides a text field where you can input a unique Public ID. Make sure the ID is something memorable and not easily guessable, but still convenient to share with classmates or friends who need to access your public content.",
  
    // Image 7
    "In this screen, the user has entered a valid Public ID and is ready to save the changes. After entering your desired Public ID, tap the 'Save' or 'Submit' button in the modal. This action links your account to a unique identifier that anyone can use to view your public Room messages on the web—without needing your Private ID or login credentials.",
  
    // Image 8
    "After successfully setting the Public ID, a confirmation toast appears notifying you that the ID has been updated. This feedback ensures the user that the process was successful. Now, your public messages can be accessed using this ID through the Nexe website, enabling frictionless sharing between app and web users for announcements, study materials, or group collaborations.",
  
    // Image 9
    "To access public messages from the web, go to the Nexe website and look for the Room tab. There, you'll see an earth icon, which signifies access to public messages. This entry point is specifically designed for viewing messages that were shared via Public ID from the mobile app. It's a quick and login-free way for others to view your publicly shared information.",
  
    // Image 10
    "After clicking the earth icon, a form appears to fetch public messages. The form includes a single input field where users can enter the Public ID they received. This ensures that only users with a valid ID can access the public content. Once the Public ID is entered correctly, clicking the 'Submit' button will initiate the data fetch process.",
  
    // Image 11
    "In this screen, the user has entered a Public ID into the form on the Nexe website. This input step is necessary to fetch messages that were previously marked as public on the app. The form is designed to be quick and accessible, allowing users to retrieve shared messages with minimal effort and without logging in.",
  
    // Image 12
    "The final screen shows the result of the fetch: public messages have been successfully retrieved and are now visible on the website. These messages were originally marked public in the app, and now anyone with the associated Public ID can view them. This feature is ideal for sharing class assignments, event notifications, or collaborative notes across a wide audience, including people using shared lab devices or public computers."
  ]
  