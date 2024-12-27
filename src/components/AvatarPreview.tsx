import React, { useState } from 'react';
import { useSpeechService } from '../hooks/useSpeechService';

export default function AvatarPreview() {
  const [message, setMessage] = useState('');
  const { speak, speaking } = useSpeechService();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="aspect-square bg-gray-200 rounded-lg mb-4">
        {/* Avatar preview will be rendered here */}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Type what you want your avatar to say..."
        rows={4}
      />
      <button
        onClick={() => speak(message)}
        disabled={speaking}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
      >
        {speaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
}