import React from 'react';
import { Activity, Heart, Zap, Timer } from 'lucide-react';

export default function Dashboard() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-400">Raihan's Fitness Hub</h1>
        <p className="text-slate-400 text-sm">Live data from Google Fit (via Huawei Health)</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Card Placeholder */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-pink-500 mb-2">
            <Heart size={20} /> <span className="font-semibold text-sm">Avg HR</span>
          </div>
          <p className="text-2xl font-bold">-- BPM</p>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-blue-500 mb-2">
            <Activity size={20} /> <span className="font-semibold text-sm">Pace</span>
          </div>
          <p className="text-2xl font-bold">-- /km</p>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-64 flex items-center justify-center">
        <p className="text-slate-500 italic">Connect your Google account to see live charts...</p>
      </div>
    </main>
  );
}
