import React from 'react';
import AvatarEditor from './components/AvatarEditor';
import AvatarPreview from './components/AvatarPreview';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">AI Avatar Creator</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AvatarPreview />
          <AvatarEditor />
        </div>
      </main>
    </div>
  );
}

export default App;