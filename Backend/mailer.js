const DOMAIN = "sandbox92eee9f1821a4c19b56237c1fad17829.mailgun.org";
import mailgun from "mailgun-js";
const mg2 = mailgun({
  apiKey: "2f95c827bfe77ef5212d428cd8da0b49-6d1c649a-abba90f2",
  domain: DOMAIN,
});
export async function sendEmail(name, email, message) {
  const data = {
    from: `${name} <${email}>`,
    to: "sunatila6391@gmail.com",
    subject: "Contact Information",
    template: "jack",
    "h:X-Mailgun-Variables": { test: `${message}` },
  };
  await mg2.messages().send(data,  function (error, body) {
    console.log(body);
  });
  setForm({});
}

// {
//     {
//         "name": "vite-project",
//         "private": true,
//         "version": "0.0.0",
//         "type": "module",
//         "scripts": {
//           "dev": "vite",
//           "build": "vite build",
//           "preview": "vite preview"
//         },
//         "dependencies": {
//           "@emailjs/browser": "^3.10.0",
//           "@react-three/drei": "^9.58.2",
//           "@react-three/fiber": "^8.12.0",
//           "framer-motion": "^10.8.4",
//           "maath": "^0.5.3",
//           "react": "^18.2.0",
//           "react-dom": "^18.2.0",
//           "react-router-dom": "^6.9.0",
//           "react-tilt": "^0.1.4",
//           "react-vertical-timeline-component": "^3.6.0",
//           "three": "^0.150.1"
//         },
//         "devDependencies": {
//           "@types/react": "^18.0.28",
//           "@types/react-dom": "^18.0.11",
//           "@vitejs/plugin-react": "^3.1.0",
//           "autoprefixer": "^10.4.14",
//           "postcss": "^8.4.21",
//           "tailwindcss": "^3.2.7",
//           "vite": "^4.2.0"
//         }
//       }
      
// }