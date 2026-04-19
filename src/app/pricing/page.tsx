"use client";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    desc: "Best for beginners",
    features: [
      { text: "1 WhatsApp Device", included: true },
      { text: "WhatsApp Bulk Messages", included: true },
      { text: "Contacts List", included: true },
      { text: "Interactive Templates", included: true },
      { text: "Send Single Message", included: true },
      { text: "Campaign Reports", included: true },
      { text: "Opt-Out Management", included: true },
      { text: "Auto Reply", included: false },
      { text: "Chatbot", included: false },
      { text: "Group Grabber", included: false },
      { text: "Manage Group", included: false },
      { text: "Call Responder", included: false },
      { text: "Follow Up", included: false },
      { text: "WhatsApp Warmer", included: false },
      { text: "Live Chat", included: false },
      { text: "AI Chatbot", included: false },
    ],
  },
  {
    name: "Professional",
    price: "₹1,499",
    desc: "Perfect for agencies",
    badge: "Most Popular",
    highlight: true,
    features: [
      { text: "10 WhatsApp Devices", included: true },
      { text: "WhatsApp Bulk Messages", included: true },
      { text: "Contacts List", included: true },
      { text: "Interactive Templates", included: true },
      { text: "Send Single Message", included: true },
      { text: "Campaign Reports", included: true },
      { text: "Opt-Out Management", included: true },
      { text: "Auto Reply", included: true },
      { text: "Chatbot", included: true },
      { text: "Group Grabber", included: true },
      { text: "Manage Group", included: true },
      { text: "WhatsApp Warmer", included: true },
      { text: "Follow Up", included: false },
      { text: "Call Responder", included: false },
      { text: "Live Chat", included: false },
      { text: "AI Chatbot", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "₹1,999",
    desc: "High volume businesses",
    features: [
      { text: "20 WhatsApp Devices", included: true },
      { text: "WhatsApp Bulk Messages", included: true },
      { text: "Contacts List", included: true },
      { text: "Interactive Templates", included: true },
      { text: "Send Single Message", included: true },
      { text: "Campaign Reports", included: true },
      { text: "Opt-Out Management", included: true },
      { text: "Auto Reply", included: true },
      { text: "Chatbot", included: true },
      { text: "Group Grabber", included: true },
      { text: "Manage Group", included: true },
      { text: "Call Responder", included: true },
      { text: "Follow Up", included: true },
      { text: "WhatsApp Warmer", included: true },
      { text: "Live Chat", included: true },
      { text: "AI Chatbot", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 bg-white shadow-md relative ${
              plan.highlight ? "border-2 border-green-600 scale-105" : ""
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-1 rounded-full">
                {plan.badge}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="text-4xl font-bold text-green-700 mb-2">
              {plan.price}
              <span className="text-sm text-gray-500"> / year</span>
            </div>

            <p className="text-gray-500 mb-6">{plan.desc}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span
                    className={`font-bold ${
                      f.included ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {f.included ? "✔" : "✖"}
                  </span>
                  <span
                    className={`${
                      f.included ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition">
              Buy Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
