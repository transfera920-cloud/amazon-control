import { BRAND_NAME } from '../data';

export function Footer() {
  return (
    <footer id="footer" className="mt-14 pt-8 pb-12 border-t border-slate-800/80 text-center">
      <p id="copyright" className="text-sm text-slate-500 font-normal tracking-wide">
        © 2026 {BRAND_NAME}
      </p>
    </footer>
  );
}
