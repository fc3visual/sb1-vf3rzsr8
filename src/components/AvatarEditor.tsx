import React from 'react';
import StyleSelector from './StyleSelector';
import ColorPicker from './ColorPicker';

export default function AvatarEditor() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Customize Avatar</h2>
      <div className="space-y-6">
        <StyleSelector />
        <ColorPicker label="Hair Color" />
        <div>
          <h3 className="text-lg font-medium mb-2">Take Photo</h3>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Open Camera
          </button>
        </div>
      </div>
    </div>
  );
}