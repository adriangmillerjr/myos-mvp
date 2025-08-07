/*
 * Chat page for MyOS. Implements a basic chat interface with
 * voice input support. Messages are stored in local state for
 * demonstration purposes. In a real application, persist messages
 * to Supabase or another database.
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import VoiceInput from '../../components/VoiceInput';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    // Simulate assistant reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: 'assistant',
          content: 'This is a demo reply.',
        },
      ]);
    }, 1000);
  };

  const handleVoiceInput = (text: string) => {
    setInput((prev) => (prev ? prev + ' ' + text : text));
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-semibold mb-4">Chat</h1>
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto space-y-4 p-4 bg-accent-2 rounded-xl"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow-sm ${
                msg.role === 'user'
                  ? 'bg-accent-3 text-background'
                  : 'bg-accent-4 text-background'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-lg bg-accent-2 text-foreground focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-accent-3 text-background px-4 py-2 rounded-lg shadow-md hover:opacity-90"
        >
          Send
        </button>
        <VoiceInput onTranscription={handleVoiceInput} />
      </div>
    </div>
  );
}