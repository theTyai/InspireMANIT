import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-[100] bg-[#030305]/80 backdrop-blur-xl border-b border-white/5 px-10 py-5 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-4">
        <img src="/assets/logo.png" alt="Logo" className="h-10" />
        <span className="text-2xl tracking-tighter gold-gradient uppercase font-bold divine-font">Inspire</span>
      </Link>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-semibold text-slate-500">
        <Link to="/events" className="hover:text-amber-500 transition-colors">Events</Link>
        <Link to="/team" className="hover:text-amber-500 transition-colors">Team</Link>
        <Link to="/affiliations" className="hover:text-amber-500 transition-colors">Affiliations</Link>
        <Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}