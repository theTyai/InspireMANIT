export default function Contact() {
  return (
    <div className="pt-32 px-10 max-w-4xl mx-auto min-h-screen">
      <div className="glass-panel p-12 rounded-[2rem] border-amber-500/20">
        <h1 className="text-4xl font-bold mb-2 gold-text-glow text-center">Connect With Us</h1>
        <p className="text-center text-blue-400 italic mb-10">"अतिथि देवो भव"</p>
        
        <form className="grid grid-cols-1 gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-amber-500 transition-colors text-white"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-amber-500 transition-colors text-white"
          />
          <textarea 
            placeholder="Share your thoughts..." 
            rows="5" 
            className="bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-amber-500 transition-colors text-white"
          />
          <button className="bg-gradient-to-r from-amber-600 to-amber-400 py-4 rounded-xl font-bold text-black uppercase tracking-widest hover:opacity-90 transition-opacity">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}