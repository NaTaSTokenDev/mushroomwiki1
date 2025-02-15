import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chrome as Mushroom } from 'lucide-react';
import { sampleMushrooms } from './sampleData';
import { MushroomCard } from './components/MushroomCard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Mushroom className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Mushroom Explorer</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sampleMushrooms.map((mushroom) => (
              <MushroomCard key={mushroom.id} mushroom={mushroom} />
            ))}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;