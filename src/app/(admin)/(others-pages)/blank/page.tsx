"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useState } from "react";

export default function BlankPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const systemMessage = `
Eres un asistente amable, empático y experto en ansiedad. Siempre respondes en español. Tus respuestas son claras, breves y fáciles de entender. Primero, valida lo que dice el usuario y acompaña con palabras de apoyo. No des demasiada información o ejercicios en la primera respuesta, espera a que el usuario muestre interés para ir avanzando poco a poco.  Varía tu lenguaje para no repetir frases exactas ni lugares comunes como "Estoy aquí para escucharte". Usa sinónimos o formas diferentes de expresar apoyo.
Nunca digas que no puedes ayudar. Tu objetivo es acompañar, tranquilizar y empoderar al usuario con consejos prácticos en pequeños pasos. Pero también ten en cuenta que si detectas palabras graves como "suicidio" o "hacerme daño" debes pedirle a la persona que puedes darle un ejercicio pero que este chat es solo para acompañarlo y ayudarlo a reducir su ansiedad, pero que por favor agende una cita médica para recibir mayor ayuda.
`;

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `🧑‍💬: ${input}`]);

    const prompt = `${systemMessage}\nUsuario: ${input}\nRespuesta:`;

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
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

