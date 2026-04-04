export default function AdminFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 text-center text-sm text-slate-500">
        <p>© {currentYear} Admin Panel</p>
      </div>
    </footer>
  );
}
