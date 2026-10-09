import React, { useState } from 'react';
import { ASYMMETRIC_STRATEGIES } from '../../data/intelligenceData';
import { AsymmetricStrategy } from '../../types/dashboard';
import { RadarAsymmetricChart } from '../charts/RadarAsymmetricChart';
import {
  ShieldAlert,
  Gem,
  Cpu,
  Network,
  Layers,
  Flame,
  ArrowRight,
  Sliders,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AsymmetricLeverageTabProps {
  onOpenGlossary: (term?: string) => void;
  onNavigateTab: (tabId: 'simulator') => void;
}

export const AsymmetricLeverageTab: React.FC<AsymmetricLeverageTabProps> = ({
  onOpenGlossary,
  onNavigateTab,
}) => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>(ASYMMETRIC_STRATEGIES[0].id);
  const [selectedAxisNote, setSelectedAxisNote] = useState<string | null>(null);

  const selectedStrategy =
    ASYMMETRIC_STRATEGIES.find((s) => s.id === selectedStrategyId) ||
    ASYMMETRIC_STRATEGIES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Gem':
        return <Gem className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getThreatBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-950/70 text-rose-300 border-rose-500/40';
      case 'Severe':
        return 'bg-amber-950/70 text-amber-300 border-amber-500/40';
      default:
        return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/40';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Overview Context Header */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <span>Counter-Measures & Retaliatory Statecraft</span>
            <span>·</span>
            <span>Non-Linear Asymmetric Strategies</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Chinese Strategic Reaction & Asymmetric Leverage Points
          </h2>
          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Targeted states do not remain passive under Western semiconductor embargoes. Denied frontier EUV tools, Beijing has mobilized asymmetric industrial statecraft: weaponizing critical mineral supply chains, flooding global markets with subsidized legacy silicon, orchestrating third-party circumvention hubs, and financing massive domestic chiplet architectures.
          </p>
        </div>
      </div>

      {/* 4 Clickable Strategy Cards */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            Select Asymmetric Strategy Vector
          </h3>
          <span className="text-[11px] text-slate-500">
            Click card to inspect operational mechanics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ASYMMETRIC_STRATEGIES.map((strat) => {
            const isSelected = strat.id === selectedStrategyId;
            return (
              <button
                key={strat.id}
                onClick={() => setSelectedStrategyId(strat.id)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-850 border-amber-500/70 shadow-lg ring-1 ring-amber-500/40'
                    : 'bg-slate-900/80 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                      {getIcon(strat.iconName)}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${getThreatBadge(strat.threatLevel)}`}>
                      {strat.threatLevel}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 mb-1">
                    {strat.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {strat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Chinese Leverage:</span>
                    <span className="font-mono font-bold text-amber-400">
                      {strat.chineseDominanceScore}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${strat.chineseDominanceScore}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span className="text-slate-400">Western Vulnerability:</span>
                    <span className="font-mono font-bold text-rose-400">
                      {strat.westernVulnerabilityScore}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${strat.westernVulnerabilityScore}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Strategy Deep Detail Panel */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-700">
              {getIcon(selectedStrategy.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                  Vector Detail
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">
                  Threat: {selectedStrategy.threatLevel}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {selectedStrategy.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateTab('simulator')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 transition-colors"
            >
              Simulate in Risk Engine →
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {selectedStrategy.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
          {/* Operational Mechanisms */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <span className="font-mono uppercase font-bold text-amber-400 text-[11px] block">
              Operational Mechanisms
            </span>
            <ul className="space-y-2 list-disc list-inside text-slate-300">
              {selectedStrategy.mechanisms.map((m, i) => (
                <li key={i} className="leading-relaxed">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Focal Nodes / Materials */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <span className="font-mono uppercase font-bold text-cyan-400 text-[11px] block">
              Targeted Nodes & Minerals
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedStrategy.keyMaterialsOrNodes.map((mat, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-200 font-mono text-[11px]"
                >
                  {mat}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 leading-normal pt-2">
              Chokepoint elements required for defense radar, automotive inverters, and foundry cleanrooms.
            </p>
          </div>

          {/* Western Countermeasures */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <span className="font-mono uppercase font-bold text-emerald-400 text-[11px] block">
              Allied Countermeasures
            </span>
            <ul className="space-y-2 list-disc list-inside text-slate-300">
              {selectedStrategy.westernCountermeasures.map((c, i) => (
                <li key={i} className="leading-relaxed">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Radar Chart: Western Chokepoints vs Chinese Counter-Leverage */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                Strategic Balance of Power
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">5-Dimensional Spider Analysis</span>
            </div>
            <h3 className="text-base font-bold text-white mt-1">
              Western Hardware Monopoly vs. Chinese Asymmetric Counter-Leverage
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl mt-0.5">
              The conflict is not a one-way embargo. While the West dominates EUV lithography (98/100) and AI software ecosystems (95/100), China maintains asymmetric dominance over critical raw materials (94/100) and legacy 28nm+ node silicon (86/100).
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
            Index: 0 (Negligible) - 100 (Absolute Monopoly)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <RadarAsymmetricChart onSelectAxis={(axis) => setSelectedAxisNote(axis)} />
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-3">
              <h4 className="font-bold text-slate-200 uppercase font-mono text-[11px] flex items-center justify-between">
                <span>Axis Balance Breakdown</span>
                <span className="text-cyan-400 font-normal">Interactive Radar</span>
              </h4>

              <div className="space-y-2.5">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <div className="flex justify-between font-mono font-semibold mb-1">
                    <span className="text-cyan-400">Lithography (EUV/DUV)</span>
                    <span>West: 98 | CN: 18</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Total Western dominance via ASML, Nikon, and Canon. China relies on multi-patterning older tools with low yields.
                  </p>
                </div>

                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <div className="flex justify-between font-mono font-semibold mb-1">
                    <span className="text-rose-400">Raw Materials (Ga/Ge/RE)</span>
                    <span>West: 22 | CN: 94</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    China controls refining of Gallium and Germanium. Western defense radars and wafer processing face extreme exposure.
                  </p>
                </div>

                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <div className="flex justify-between font-mono font-semibold mb-1">
                    <span className="text-amber-400">Mature Node Silicon (28nm+)</span>
                    <span>West: 42 | CN: 86</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Massive Chinese state subsidies creating Western automotive and medical supply chain dependence.
                  </p>
                </div>
              </div>

              {selectedAxisNote && (
                <div className="mt-2 pt-2 border-t border-slate-800 text-cyan-300 font-mono text-[11px]">
                  Selected Axis: {selectedAxisNote}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
