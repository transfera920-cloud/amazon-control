import { ExternalLink } from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
  key?: string;
}

export function LinkCard({ item }: LinkCardProps) {
  return (
    <a
      id={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between w-full px-5 py-4 bg-slate-900/70 backdrop-blur-md rounded-xl border border-slate-800/80 shadow-md shadow-black/20 hover:border-slate-600 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-emerald-950/20 active:scale-[0.99] transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50"
    >
      <span className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
        {item.title}
      </span>
      <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0 ml-3 group-hover:bg-emerald-950/60 group-hover:border-emerald-700/60 transition-colors">
        <ExternalLink
          className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
