export default function Affiliations() {
  return (
    <div className="pt-32 px-8 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-16 gold-gradient text-center">Affiliations</h1>
      <div className="space-y-8">
        <div className="divine-card p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 border-l-4 border-l-amber-500">
          <div className="text-6xl font-black text-white/10">01</div>
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-2 font-serif uppercase">AVK</h2>
            <p className="text-slate-400">Academic Value Kendra - Our primary scholarly partner in promoting IKS.</p>
          </div>
        </div>

        <div className="divine-card p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 border-l-4 border-l-blue-500">
          <div className="text-6xl font-black text-white/10">02</div>
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-2 uppercase">Others</h2>
            <p className="text-slate-400">IKS Sphere, Ministry of Education, and various MANIT student bodies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}