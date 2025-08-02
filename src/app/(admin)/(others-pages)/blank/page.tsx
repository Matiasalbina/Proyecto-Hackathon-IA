"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState } from "react";

export default function BlankPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `🧑‍💬: ${input}`]);

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `🤖: ${data.response}`]);
    setInput("");
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Hablemos" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          {/* Chat window */}
          <div className="bg-gray-100 dark:bg-white/[0.06] rounded p-4 h-80 overflow-y-auto mb-4 text-left">
            {messages.map((msg, i) => (
              <p key={i} className="mb-2 whitespace-pre-wrap">{msg}</p>
            ))}
          </div>

          {/* Input form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe algo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

