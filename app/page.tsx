'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { Activity, Heart, User, LogIn, LogOut } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState({ hr: '--', pace: '--' });

  // Fungsi buat narik data dari Google Fit setelah login
  useEffect(() => {
    if (session) {
      // Di sini nanti panggil API Google Fit
      // Untuk sementara kita simulasikan data masuk
      setStats({ hr: '162', pace: '5:30' }); 
    }
  }, [session]);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Raihan's Fitness Hub</h1>
          <p className="text-slate-400 text-sm">Target: Persiapan 10K</p>
        </div>
        
        {!session ? (
          <button onClick={() => signIn('google')} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition">
            <LogIn size={18} /> Connect Google Fit
          </button>
        ) : (
          <button onClick={() => signOut()} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium transition text-slate-300">
            <LogOut size={18} /> Disconnect
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-pink-500 mb-2">
            <Heart size={20} /> <span className="font-semibold text-sm">Avg Heart Rate</span>
          </div>
          <p className="text-2xl font-bold">{stats.hr} <span className="text-sm font-normal text-slate-500">BPM</span></p>
        </div>
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-blue-500 mb-2">
            <Activity size={20} /> <span className="font-semibold text-sm">Current Pace</span>
          </div>
          <p className="text-2xl font-bold text-slate-100">{stats.pace} <span className="text-sm font-normal text-slate-500">/km</span></p>
        </div>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center">
        {!session ? (
          <p className="text-slate-500 italic">Please connect your account to analyze your training zones.</p>
        ) : (
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><User size={20} className="text-blue-400" /> Training Analysis</h3>
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
              <p className="text-blue-200 text-sm italic">
                "Berdasarkan data lari terakhir, kamu menghabiskan 45 menit di zona aerobik. Bagus untuk persiapan endurance 10K kamu!"
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
