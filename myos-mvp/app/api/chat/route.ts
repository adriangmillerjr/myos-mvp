import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: 'Server missing OPENROUTER_API_KEY' }, { status: 500 });
  }
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Provide referrer header as required by OpenRouter
        'HTTP-Referer': 'https://myos.ai'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      }),
    });
    const data = await res.json();
    const message = data?.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ message });
  } catch (error) {
    console.error('OpenRouter API error', error);
    return NextResponse.json({ message: 'Error generating response' }, { status: 500 });
  }
}