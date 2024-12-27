import React from 'react';

const colors = [
  '#000000', '#4A4A4A', '#A52A2A',
  '#DAA520', '#FF4500', '#FFD700'
];

interface ColorPickerProps {
  label: string;
}

export default function ColorPicker({ label }: ColorPickerProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className="w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}