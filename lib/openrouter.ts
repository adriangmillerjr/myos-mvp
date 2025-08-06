export async function sendMessage(messages: { role: string; content: string }[]) {
  const res = await fetch('/api/openrouter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  return res.json();
}
