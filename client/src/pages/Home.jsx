export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <img src="/assets/logo.png" alt="Logo" className="h-24 mb-8 drop-shadow-[0_0_15px_rgba(210,162,74,0.5)]" />
        <h1 className="text-6xl md:text-8xl font-bold gold-gradient mb-6 leading-tight">Inspire Club</h1>
        <p className="max-w-2xl text-lg text-slate-400 italic font-light tracking-wide">
          "Reviving the Indian Knowledge System for Modern Engineering Excellence"
        </p>
      </section>

      {/* Grid from Sketch */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-8 pb-20">
        <div className="divine-card p-12 rounded-[2rem] blue-glow">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 italic">Native</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Connecting students to the foundational wisdom of IKS in science, healthcare, and sustainability.
          </p>
        </div>

        <div className="divine-card p-12 rounded-[2rem]">
          <h2 className="text-3xl font-bold mb-6 text-amber-500 italic">Work Stuff</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Hands-on workshops, Ideathons (Gyan Manthan), and community service projects.
          </p>
        </div>

        <div className="divine-card p-10 rounded-[2rem] md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-white">Guests & Alumni</h3>
          <p className="text-slate-500">Bridging the gap between experience and curiosity.</p>
        </div>

        <div className="divine-card p-10 rounded-[2rem] md:col-span-1 border-amber-500/20">
          <h3 className="text-xl font-bold mb-4 text-white">Partners</h3>
          <p className="text-slate-500">Collaborating with national IKS bodies and technical consortiums.</p>
        </div>
      </div>
    </div>
  );
}