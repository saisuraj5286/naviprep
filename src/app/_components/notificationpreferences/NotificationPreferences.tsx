// components/NotificationPreferences.tsx
import { AtSign, MessageSquare } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";

import React, { useState } from "react";

const notifications = [
  {
    id: "news",
    label: "News and updates",
    description: "News about product and feature updates.",
  },
  {
    id: "tips",
    label: "Tips and tutorials",
    description: "Tips on getting more out of Courier.",
  },
  {
    id: "whatsapp",
    label: "Whats-app",
    description: "Data results to help you better understand your users.",
  },
];

export default function NotificationPreferences() {
  const [values, setValues] = useState({
    news: true,
    tips: false,
    whatsapp: false,
  });

  function handleChange(id: string) {
    setValues((v) => ({ ...v, [id]: !v[id as keyof typeof v] }));
  }

  return (
    <div className="mx-auto min-w-full  flex-1 px-6  ">
      <div className="flex justify-between ">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Notification preferences</h1>
          <p className="mb-8 text-gray-500">
            Get emails to found out what is going on when you are not online.
            You can turn them off anytime.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center">
            <MessageSquare size={32} />
            <p>chat</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiWhatsappLine size={32} />
            <p>whatsapp</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AtSign size={32} />
            <p>email</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Notifications from us</h2>
        <p className="mb-4 text-sm text-gray-500">
          Receive the latest news, updates, and industry tutorials from us.
        </p>
        <div className="flex flex-col gap-2">
          {notifications.map((opt) => (
            <label
              key={opt.id}
              className="flex cursor-pointer items-start gap-3 py-2"
            >
              <input
                type="checkbox"
                checked={values[opt.id as keyof typeof values]}
                onChange={() => handleChange(opt.id)}
                className="mt-1 h-5 w-5 rounded border-gray-300 accent-[#2c6aec] focus:ring-2 focus:ring-[#2c6aec]"
              />
              <span>
                <span className="font-semibold">{opt.label}</span>
                <span className="block text-sm text-gray-500">
                  {opt.description}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="mb-2 text-sm text-gray-400">Or share with link</div>
        <div className="relative">
          <input
            type="text"
            readOnly
            className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 pr-10 text-gray-400 shadow"
            value="https://www.figma.com/file/NlfvNfYyYgR9mAQasassdsada/Share..." // Example only
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
            tabIndex={-1}
          >
            {/* Paste your clipboard icon here, e.g. Lucide/Clipboard */}
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <rect x="4" y="4" width="12" height="12" rx="2" />
              <path d="M8 2v2h4V2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
