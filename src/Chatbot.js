
import { useEffect } from "react";
// import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import "./Chatbot.css";

function Chatbot() {


  // useEffect(() => {
  //   createChat({
  //     webhookUrl: "YOUR_N8N_PRODUCTION_CHAT_URL",
  //     mode: "window",
  //     showWelcomeScreen: false,
  //     loadPreviousSession: true,
  //     initialMessages: [
  //       "Hi there! 👋",
  //       "I'm your AI assistant. How can I help you today?",
  //     ],
  //     i18n: {
  //       en: {
  //         title: "Chat with AI ✨",
  //         subtitle: "Ask me anything",
  //         footer: "",
  //         getStarted: "Start chatting",
  //         inputPlaceholder: "Type your message...",
  //       },
  //     },
  //   });
  // }, []);

  return null;
}

export default Chatbot;