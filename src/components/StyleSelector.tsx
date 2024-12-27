import React from 'react';

const styles = [
  { id: '3d', name: '3D', preview: '/styles/3d.png' },
  { id: 'cartoon', name: 'Cartoon', preview: '/styles/cartoon.png' },
  { id: 'realistic', name: 'Realistic', preview: '/styles/realistic.png' }
];

export default function StyleSelector() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Choose Style</h3>
      <div className="grid grid-cols-3 gap-4">
        {styles.map((style) => (
          <button
            key={style.id}
            className="p-2 border rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              src={style.preview}
              alt={style.name}
              className="w-full aspect-square object-cover rounded mb-2"
            />
            <span className="block text-sm text-center">{style.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}