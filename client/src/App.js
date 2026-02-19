import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Affiliations from './pages/Affiliations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Abstract Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/affiliations" element={<Affiliations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="py-12 border-t border-white/5 text-center bg-black/50">
          <p className="text-xs tracking-[0.5em] text-slate-500">अमृतं तु विद्या — INSPIRE MANIT</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;