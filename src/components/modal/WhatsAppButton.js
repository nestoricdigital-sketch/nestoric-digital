import { MessageCircle } from "lucide-react";
import whatsappIcon from "./../images/icons/wApp.webp";
const WhatsAppButton = () => {
  const phoneNumber = "916361985560"; // Replace with your number
  const message = "Hi, I would like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-2 md:right-6 z-[9999] group"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <div className="relative flex items-center justify-center rounded-full  shadow-xl hover:scale-110 transition-all duration-100">
        <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
