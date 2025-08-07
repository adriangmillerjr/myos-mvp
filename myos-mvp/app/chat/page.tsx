'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Mic, Send } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data: msgs } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('user_id', user.id)
          .order('timestamp', { ascending: true })
          .limit(50);
        if (msgs) {
          setMessages(msgs.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })));
        }
      }
    };
    init();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    if (user) {
      await supabase.from('chat_messages').insert({ user_id: user.id, role: 'user', content: userMessage.content });
    }
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await res.json();
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);
      if (user) {
        await supabase.from('chat_messages').insert({ user_id: user.id, role: 'assistant', content: assistantMessage.content });
      }
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      alert('Your browser does not support audio recording');
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    setRecording(true);
    recorder.start();
    recorder.ondataavailable = async (event) => {
      const blob = event.data;
      const formData = new FormData();
      formData.append('file', blob, 'recording.webm');
      try {
        const resp = await fetch('/api/whisper', { method: 'POST', body: formData });
        const data = await resp.json();
        if (data.transcript) {
          setInput((prev) => (prev ? prev + ' ' + data.transcript : data.transcript));
        }
      } catch (err) {
        console.error('Whisper error:', err);
      }
    };
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Chat</h1>
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-light/60 border border-white/10 rounded-lg backdrop-blur-sm"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.role === 'user'
                ? 'flex justify-end'
                : 'flex justify-start'
            }
          >
            <div
              className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg text-sm break-words ${
                msg.role === 'user'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white/10 text-white'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 mt-2"
      >
        <button
          type="button"
          onClick={recording ? stopRecording : startRecording}
          className={`p-3 rounded-full flex items-center justify-center transition-colors ${
            recording ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'
          } text-white`}
          aria-label={recording ? 'Stop recording' : 'Start recording'}
        >
          <Mic size={18} />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 rounded-lg bg-background-light/70 border border-white/10 text-sm focus:border-primary-500 focus:ring-0"
        />
        <button
          type="submit"
          className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}