import { BRAND_NAME, BRAND_URL } from '../data';

export function Hero() {
  return (
    <header id="hero" className="pt-4 pb-2 sm:pt-8 sm:pb-4">
      {/* 頁首品牌（置左對齊，連結至品牌官網） */}
      <div className="flex justify-start mb-4 sm:mb-6">
        <a
          id="hero-brand-link"
          href={BRAND_URL}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 hover:text-emerald-200 hover:border-emerald-600/50 transition-colors text-xs sm:text-sm font-medium tracking-wider shadow-inner"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span id="hero-subtitle">{BRAND_NAME}</span>
        </a>
      </div>
      <div className="text-center">
        <h1
          id="hero-main-title"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 drop-shadow-sm"
        >
          路況與管制資訊
        </h1>
      </div>
    </header>
  );
}
