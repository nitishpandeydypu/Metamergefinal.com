export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919234547310"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-xl hover:scale-110 transition"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
}
