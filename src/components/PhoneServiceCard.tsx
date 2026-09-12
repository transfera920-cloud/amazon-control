import { Phone } from 'lucide-react';
import { PHONE_SERVICE } from '../data';

export function PhoneServiceCard() {
  return (
    <div
      id="service-phone-card"
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 hover:border-slate-700 shadow-md shadow-black/20 gap-2 transition-all"
    >
      <div id="service-phone-title" className="text-base sm:text-lg font-medium text-slate-200">
        {PHONE_SERVICE.title}
      </div>
      <a
        id="service-phone-link"
        href={PHONE_SERVICE.telUrl}
        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-base sm:text-lg font-bold text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 transition-all focus:outline-hidden focus:ring-2 focus:ring-amber-500 self-start sm:self-auto"
      >
        <Phone className="w-4 h-4 mr-2 text-amber-400 shrink-0" aria-hidden="true" />
        <span>{PHONE_SERVICE.number}</span>
      </a>
    </div>
  );
}
