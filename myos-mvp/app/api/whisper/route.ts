import { NextResponse } from 'next/server';

/**
 * API route to handle audio transcription using OpenAI Whisper API.
 * Expects a POST request with a multipart/form-data body containing an audio file in the `file` field.
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
    }
    // Forward the file to OpenAI's Whisper API
    const data = new FormData();
    data.append('file', file, 'audio.webm');
    data.append('model', 'whisper-1');
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: data,
    });
    const json = await response.json();
    return NextResponse.json({ transcript: json.text });
  } catch (error) {
    console.error('Whisper API error', error);
    return NextResponse.json({ error: 'Failed to transcribe audio' }, { status: 500 });
  }
}