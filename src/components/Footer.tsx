export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center text-sm text-gray-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p>© {new Date().getFullYear()} Dr. Bathrinath M S. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-2">Pharm.D | Pharmacovigilance & Clinical Research Professional</p>
      </div>
    </footer>
  );
}