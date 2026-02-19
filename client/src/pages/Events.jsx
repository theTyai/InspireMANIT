const EventCard = ({ title, status, desc }) => (
  <div className="glass-panel p-8 rounded-2xl flex justify-between items-center group mb-6">
    <div>
      <span className={`text-[10px] px-3 py-1 rounded-full border uppercase tracking-widest ${
        status === 'Present' ? 'border-amber-500 text-amber-500' : 'border-slate-700 text-slate-500'
      }`}>
        {status}
      </span>
      <h3 className="text-2xl font-bold mt-4 text-white group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mt-2">{desc}</p>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className="pt-32 px-10 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-5xl font-bold mb-16 gold-text-glow">Events Timeline</h1>
      <div className="space-y-4">
        <EventCard 
          title="Gyan Manthan" 
          status="Present" 
          desc="Weekly interdisciplinary sessions exploring the Indian Knowledge System (IKS)." 
        />
        <EventCard 
          title="Linux Workshop" 
          status="Past" 
          desc="A workshop conducted by the CyberSecurity OWASP Consortium on Linux OS." 
        />
      </div>
    </div>
  );
}