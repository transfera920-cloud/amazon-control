export function Hero() {
  return (
    <header id="hero" className="text-center pt-6 pb-2 sm:pt-10 sm:pb-4">
      <div
        id="hero-badge"
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300/90 text-xs sm:text-sm font-medium tracking-wider mb-4 shadow-inner"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span id="hero-subtitle">登山接駁</span>
      </div>
      <h1
        id="hero-main-title"
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-sm"
      >
        路況與管制資訊
      </h1>
    </header>
  );
}
