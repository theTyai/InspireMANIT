import { useState } from 'react';

export default function Team() {
  const [activeTab, setActiveTab] = useState('Core'); // Stepwise logic

  const members = {
    Core: ["Ashish", "Tanishq", "Aryan"],
    Mentors: ["Professors", "Alumni"]
  };

  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-5xl font-bold gold-gradient text-center mb-12 italic">The Sevaks</h2>
      
      {/* Stepwise State Toggle */}
      <div className="flex justify-center mb-16 gap-4">
        {Object.keys(members).map((state) => (
          <button
            key={state}
            onClick={() => setActiveTab(state)}
            className={`px-8 py-2 rounded-full border transition-all text-xs tracking-widest uppercase ${
              activeTab === state ? 'bg-amber-500 text-black border-amber-500' : 'border-white/10 text-slate-500'
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {members[activeTab].map((name, i) => (
          <div key={i} className="divine-card p-8 rounded-2xl text-center group">
            <div className="w-20 h-20 bg-gradient-to-b from-blue-900 to-black rounded-full mx-auto mb-4 border border-white/5" />
            <h4 className="text-white font-bold tracking-wider">{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}