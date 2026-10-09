import React, { useState } from 'react';
import { MIND_MAP_DOMAINS } from '../../data/intelligenceData';
import { MindMapNode, MindMapDomain } from '../../types/dashboard';
import {
  GitBranch,
  AlertOctagon,
  Flame,
  Globe,
  Coins,
  Cpu,
  ChevronRight,
  TrendingUp,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';

interface FutureMindMapTabProps {
  onOpenGlossary: (term?: string) => void;
  onNavigateTab: (tabId: 'simulator') => void;
}

export const FutureMindMapTab: React.FC<FutureMindMapTabProps> = ({
  onOpenGlossary,
  onNavigateTab,
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(MIND_MAP_DOMAINS[0].id);
  const [selectedNode, setSelectedNode] = useState<MindMapNode>(MIND_MAP_DOMAINS[0].nodes[0]);
  const [filterImpact, setFilterImpact] = useState<string>('all');

  const selectedDomain =
    MIND_MAP_DOMAINS.find((d) => d.id === selectedDomainId) ||
    MIND_MAP_DOMAINS[0];

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'Catastrophic':
        return 'bg-red-950/80 text-red-300 border-red-500/60 font-bold';
      case 'Critical':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/50';
      case 'High':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50';
      default:
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50';
    }
  };

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'tech-escalation':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'geopolitical-alliances':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'economic-fragmentation':
        return <Coins className="w-4 h-4 text-amber-400" />;
      case 'kinetic-flashpoints':
      default:
        return <AlertOctagon className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Overview Context Header */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span>Horizon Scanning & Scenario Trees</span>
            <span>·</span>
            <span>Future Conflict Domains</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            The Future of the Compute War: 4-Domain Mind Map & Escalation Paths
          </h2>
          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            The structural trajectory of the global compute war is branching across technological, political, economic, and security dimensions. Explore the interactive mind map nodes below to evaluate probability scores, escalation triggers, and catastrophic tail risks.
          </p>
        </div>
      </div>

      {/* Visual Central Mind Map Diagram Hub */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Conflict Domain Architecture (Report Page 4)</span>
            </h3>
            <p className="text-xs text-slate-400">
              Select a domain or click individual branches to drill down into strategic drivers
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Impact Filter:</span>
            <select
              value={filterImpact}
              onChange={(e) => setFilterImpact(e.target.value)}
              className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Severity Levels</option>
              <option value="Catastrophic">Catastrophic Only</option>
              <option value="Critical">Critical & Catastrophic</option>
            </select>
          </div>
        </div>

        {/* 4 Domain Tabs / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {MIND_MAP_DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => {
                  setSelectedDomainId(domain.id);
                  setSelectedNode(domain.nodes[0]);
                }}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-850 border-cyan-500 shadow-md ring-1 ring-cyan-500/40'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800">
                    {getDomainIcon(domain.id)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                    {domain.nodes.length} Pathways
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-100 line-clamp-1">
                  {domain.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  {domain.id === 'kinetic-flashpoints'
                    ? 'Taiwan Strait & Grey-Zone'
                    : domain.id === 'economic-fragmentation'
                    ? 'Supply chain duplication & costs'
                    : domain.id === 'geopolitical-alliances'
                    ? 'Chip 4 & Compute havens'
                    : 'Cloud KYC & Post-silicon R&D'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Nodes Grid for the Selected Domain */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {selectedDomain.title} — Active Pathways
            </h4>
            <span className="text-[11px] text-slate-500">
              Click pathway node to review intelligence brief
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedDomain.nodes
              .filter((n) => {
                if (filterImpact === 'Catastrophic') return n.impact === 'Catastrophic';
                if (filterImpact === 'Critical') return n.impact === 'Critical' || n.impact === 'Catastrophic';
                return true;
              })
              .map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-850 border-cyan-400/80 shadow-md ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/70 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${getImpactBadge(node.impact)}`}>
                          {node.impact} Impact
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{node.timeframe}</span>
                        </span>
                      </div>

                      <h5 className="text-xs font-bold text-slate-100 line-clamp-2 mb-2">
                        {node.label}
                      </h5>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-400">Estimated Probability:</span>
                        <span className="font-mono font-bold text-cyan-300">
                          {node.probability}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full"
                          style={{ width: `${node.probability}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </section>

      {/* Selected Node Deep Dive Briefing Panel */}
      {selectedNode && (
        <section className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-6 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                  Strategic Analysis Dossier
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">
                  Timeframe: {selectedNode.timeframe}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                {selectedNode.label}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Probability
                </span>
                <span className="text-lg font-bold font-mono text-cyan-300 tabular-nums">
                  {selectedNode.probability}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Systemic Impact
                </span>
                <span className={`text-xs px-2.5 py-1 rounded border font-mono font-bold ${getImpactBadge(selectedNode.impact)}`}>
                  {selectedNode.impact}
                </span>
              </div>
            </div>
          </div>

          {/* Analysis Prose */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
            {selectedNode.analysis}
          </div>

          {/* Drivers & Triggers 2-Col Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="font-mono uppercase font-bold text-cyan-300 text-[11px] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Underlying Structural Drivers</span>
              </span>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                {selectedNode.keyDrivers.map((driver, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {driver}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="font-mono uppercase font-bold text-rose-300 text-[11px] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>Immediate Escalation Triggers</span>
              </span>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                {selectedNode.escalationTriggers.map((trigger, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>Drawn from Section 4: "The Future of the Conflict (Mind Map)"</span>
            <button
              onClick={() => onNavigateTab('simulator')}
              className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] flex items-center gap-1 font-semibold"
            >
              <span>Test scenario in Risk Simulator</span>
              <span>→</span>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
