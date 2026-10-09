import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/intelligenceData';
import { X, Search, BookOpen, ExternalLink } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedInitialTerm?: string | null;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  selectedInitialTerm,
}) => {
  const [searchTerm, setSearchTerm] = useState(selectedInitialTerm || '');

  if (!isOpen) return null;

  const filtered = GLOSSARY_TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.geopoliticalSignificance.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#0f172a] border border-slate-700/80 rounded-xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="glossary-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="glossary-title" className="text-lg font-bold text-slate-100 flex items-center gap-2">
                Strategic Semiconductor & AI Lexicon
              </h2>
              <p className="text-xs text-slate-400">
                Technical definitions, physical mechanisms, and geopolitical chokepoints
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close glossary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-3 border-b border-slate-800/80 bg-slate-950/30">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter terms (e.g. EUV, EDA, CoWoS, High-Bandwidth Memory)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              autoFocus
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Term List */}
        <div className="p-6 overflow-y-auto space-y-4 divide-y divide-slate-800/60">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No matching technical terms found for "{searchTerm}".
            </div>
          ) : (
            filtered.map((item) => (
              <div key={item.term} className="pt-4 first:pt-0 group">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-cyan-400 text-base group-hover:text-cyan-300 transition-colors">
                      {item.term}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {item.fullName}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Primary: {item.keyHolders}
                  </span>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  {item.definition}
                </p>

                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                  <span className="text-[11px] font-semibold text-amber-400 block mb-0.5 uppercase tracking-wide">
                    Geopolitical Chokepoint Significance:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.geopoliticalSignificance}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/40 flex justify-between items-center text-xs text-slate-500">
          <span>8 Standard Strategic Chokepoint Definitions</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Close Lexicon
          </button>
        </div>
      </div>
    </div>
  );
};
