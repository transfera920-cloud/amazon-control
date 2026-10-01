import { BRAND_NAME, BRAND_URL } from '../data';

export function Footer() {
  return (
    <footer id="footer" className="mt-14 pt-8 pb-12 border-t border-slate-800/80 text-center">
      <p id="copyright" className="text-sm text-slate-500 font-normal tracking-wide">
        © 2026{' '}
        <a
          href={BRAND_URL}
          className="text-slate-400 hover:text-emerald-400 transition-colors underline decoration-slate-700 hover:decoration-emerald-400 underline-offset-4"
        >
          {BRAND_NAME}
        </a>
      </p>
    </footer>
  );
}
