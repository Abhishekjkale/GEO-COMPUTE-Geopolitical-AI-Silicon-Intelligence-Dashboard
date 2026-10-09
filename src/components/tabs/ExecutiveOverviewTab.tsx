import React, { useState } from 'react';
import { KPI_METRICS, CHOKEPOINT_DEEP_DIVES } from '../../data/intelligenceData';
import { DoughnutChart } from '../charts/DoughnutChart';
import { BarComputeChart } from '../charts/BarComputeChart';
import {
  Cpu,
  Zap,
  Globe2,
  Scale,
  ChevronDown,
  ChevronUp,
  Info,
  Maximize2,
  ExternalLink,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

interface ExecutiveOverviewTabProps {
  onOpenGlossary: (term?: string) => void;
  onNavigateTab: (tabId: 'trilateral' | 'asymmetric' | 'mindmap' | 'simulator') => void;
}

export const ExecutiveOverviewTab: React.FC<ExecutiveOverviewTabProps> = ({
  onOpenGlossary,
  onNavigateTab,
}) => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'compute-chokepoint': true,
    'decoupling-derisking': false,
    'ai-sovereignty': false,
  });

  const [selectedRegionNote, setSelectedRegionNote] = useState<string | null>(null);
  const [selectedBlocNote, setSelectedBlocNote] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setExpandedCards({
      'compute-chokepoint': true,
      'decoupling-derisking': true,
      'ai-sovereignty': true,
    });
  };

  const collapseAll = () => {
    setExpandedCards({
      'compute-chokepoint': false,
      'decoupling-derisking': false,
      'ai-sovereignty': false,
    });
  };

  const getBadgeClasses = (color: string) => {
    switch (color) {
      case 'rose':
        return 'bg-rose-950/70 text-rose-300 border-rose-500/40';
      case 'amber':
        return 'bg-amber-950/70 text-amber-300 border-amber-500/40';
      case 'emerald':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40';
      case 'cyan':
      default:
        return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Briefing Banner */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <span>Strategic Intelligence Report</span>
              <span>·</span>
              <span>AI Hardware & Export Controls</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              The Geopolitics of Artificial Intelligence, Compute, and Technological Decoupling
            </h1>
            <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
              Global power has shifted from data abundance to compute density. Control over leading-edge photolithography, EDA toolchains, and AI accelerator clusters represents the foremost structural chokepoint of modern international relations.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigateTab('simulator')}
              className="px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Launch Risk Simulator</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core KPI Metrics Strip */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Core Structural Concentration Metrics
          </h2>
          <span className="text-[11px] text-slate-400">
            Real-time industry census & foundry audit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KPI_METRICS.map((kpi) => (
            <div
              key={kpi.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${getBadgeClasses(kpi.badgeColor)}`}>
                    {kpi.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {kpi.trend}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-3xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                    {kpi.value}
                  </div>
                  <div className="text-xs font-semibold text-cyan-300 mt-1">
                    {kpi.entity}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-200 mb-1">
                  {kpi.title}
                </div>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-2">
                  {kpi.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Intelligence Grid: 2 Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Donut Manufacturing Capacity */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-100">
                    Global Advanced Logic (<span className="text-rose-400">&lt;7nm</span>) Fab Capacity
                  </h3>
                  <button
                    onClick={() => onOpenGlossary('Fab')}
                    className="text-slate-500 hover:text-slate-300"
                    title="What is a semiconductor Fab?"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Percentage distribution of commercial sub-7nm silicon wafer fabrication
                </p>
              </div>
              <span className="text-[11px] font-mono text-rose-400 bg-rose-950/40 border border-rose-500/30 px-2 py-0.5 rounded">
                Extreme Chokepoint
              </span>
            </div>

            <div className="mt-4">
              <DoughnutChart onSelectRegion={(region) => setSelectedRegionNote(region)} />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs">
            {selectedRegionNote ? (
              <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 flex items-center justify-between">
                <span>Selected: <strong className="text-cyan-300">{selectedRegionNote}</strong></span>
                <button
                  onClick={() => setSelectedRegionNote(null)}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  Reset
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between text-slate-400">
                <span>Taiwan (TSMC) produces <strong>over 90%</strong> of chips powering ChatGPT, Gemini, and Claude.</span>
                <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">Hover/Tap Slice</span>
              </div>
            )}
          </div>
        </div>

        {/* Chart 2: Horizontal Bar AI Compute Distribution */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-100">
                    Global AI Training Compute Allocation
                  </h3>
                  <button
                    onClick={() => onOpenGlossary('EUV')}
                    className="text-slate-500 hover:text-slate-300"
                    title="Explain compute hardware"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Estimated aggregate active cluster capacity measured in PetaFLOPs (FP16/BF16)
                </p>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                14:1 Divide
              </span>
            </div>

            <div className="mt-4">
              <BarComputeChart onSelectBloc={(bloc) => setSelectedBlocNote(bloc)} />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs">
            {selectedBlocNote ? (
              <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 flex items-center justify-between">
                <span>Selected Bloc: <strong className="text-cyan-300">{selectedBlocNote}</strong></span>
                <button
                  onClick={() => setSelectedBlocNote(null)}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  Reset
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between text-slate-400">
                <span>US Western hyperscalers deploy <strong>~70%</strong> of active world frontier training compute.</span>
                <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">PFLOPS Scale</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Deep Dive Text Cards: Expandable Sections */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              Strategic Deep Dives & Theoretical Paradigms
            </h2>
            <p className="text-xs text-slate-400">
              Analysis drawn directly from the Strategic Intelligence Report
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="text-slate-400 hover:text-cyan-300 font-mono text-[11px]"
            >
              Expand All
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={collapseAll}
              className="text-slate-400 hover:text-cyan-300 font-mono text-[11px]"
            >
              Collapse All
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {CHOKEPOINT_DEEP_DIVES.map((card) => {
            const isExpanded = !!expandedCards[card.id];
            return (
              <div
                key={card.id}
                className="bg-slate-900/85 border border-slate-800 rounded-xl overflow-hidden transition-all shadow-sm"
              >
                {/* Header / Clickable Accordion Row */}
                <button
                  onClick={() => toggleCard(card.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-850/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      card.accentColor === 'amber'
                        ? 'bg-amber-400'
                        : card.accentColor === 'rose'
                        ? 'bg-rose-400'
                        : card.accentColor === 'emerald'
                        ? 'bg-emerald-400'
                        : 'bg-cyan-400'
                    }`} />
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {card.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-xs font-mono hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 space-y-4 text-xs text-slate-300">
                    {/* Paradigm Quote if available */}
                    {card.quote && (
                      <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 italic leading-relaxed">
                        <span className="font-semibold text-cyan-400 not-italic block mb-1 font-mono text-[11px] uppercase tracking-wider">
                          Strategic Paradigm Shift:
                        </span>
                        "{card.quote}"
                      </div>
                    )}

                    <p className="leading-relaxed text-slate-300 text-sm">
                      {card.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {/* Strategic Points */}
                      <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                        <span className="font-semibold text-cyan-300 block mb-2 font-mono text-[11px] uppercase tracking-wide">
                          Key Structural Pillars
                        </span>
                        <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                          {card.strategicPoints.map((pt, i) => (
                            <li key={i} className="leading-relaxed">
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Vulnerabilities */}
                      <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                        <span className="font-semibold text-amber-300 block mb-2 font-mono text-[11px] uppercase tracking-wide">
                          Critical Vulnerabilities
                        </span>
                        <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                          {card.vulnerabilities.map((v, i) => (
                            <li key={i} className="leading-relaxed">
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Strategic Implications */}
                      <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                        <span className="font-semibold text-emerald-300 block mb-2 font-mono text-[11px] uppercase tracking-wide">
                          Geopolitical Implications
                        </span>
                        <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                          {card.implications.map((imp, i) => (
                            <li key={i} className="leading-relaxed">
                              {imp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
                      <span>Referenced in Strategic Intelligence Report (Page 1)</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenGlossary()}
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <span>Review Technical Chokepoints (EUV / DUV / GAAFET)</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
