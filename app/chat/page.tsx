'use client';
import { useState } from 'react';
import { sendMessage } from '@/lib/openrouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ChatPage() {
  const [messages, setMessages] = useState([{ role: 'system', content: 'Hi! How can I help?' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    const res = await sendMessage(newMessages);
    setMessages([...newMessages, res]);
  };

  return (
    <div className="p-4">
      <div className="mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`${msg.role === 'user' ? 'text-right' : 'text-left'} p-2 bg-gray-100 rounded`}>
            <strong>{msg.role}</strong>: {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}
