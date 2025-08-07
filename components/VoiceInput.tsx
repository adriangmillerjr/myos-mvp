/*
 * VoiceInput component. Starts the browser's SpeechRecognition engine
 * to capture voice input and emit transcribed text to the parent component.
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { MicIcon, MicOffIcon } from 'lucide-react';

interface VoiceInputProps {
  onTranscription: (text: string) => void;
}

export default function VoiceInput({ onTranscription }: VoiceInputProps) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Initialize SpeechRecognition on mount if available
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          onTranscription(transcript);
        };
        recognition.onend = () => {
          setListening(false);
        };
        recognitionRef.current = recognition;
      }
    }
  }, [onTranscription]);

  const handleToggle = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`p-2 rounded-lg shadow-md ${listening ? 'bg-red-500 text-white' : 'bg-accent-3 text-background'}`}
      title={listening ? 'Stop listening' : 'Start voice input'}
    >
      {listening ? <MicOffIcon className="w-5 h-5" /> : <MicIcon className="w-5 h-5" />}
    </button>
  );
}