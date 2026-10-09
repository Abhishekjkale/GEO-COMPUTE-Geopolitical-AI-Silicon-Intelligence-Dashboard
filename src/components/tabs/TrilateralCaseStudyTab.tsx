import React, { useState } from 'react';
import { TRILATERAL_ACTORS, TIMELINE_MILESTONES } from '../../data/intelligenceData';
import { TrilateralActor } from '../../types/dashboard';
import {
  Scale,
  Calendar,
  Search,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

interface TrilateralCaseStudyTabProps {
  onOpenGlossary: (term?: string) => void;
}

export const TrilateralCaseStudyTab: React.FC<TrilateralCaseStudyTabProps> = ({
  onOpenGlossary,
}) => {
  const [selectedActor, setSelectedActor] = useState<TrilateralActor | null>(TRILATERAL_ACTORS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1); // Default to Trilateral Consensus
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredActors = TRILATERAL_ACTORS.filter(
    (actor) =>
      actor.jurisdiction.toLowerCase().includes(searchTerm.toLowerCase()) ||
      actor.primaryChokepoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      actor.champions.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeMilestone = TIMELINE_MILESTONES[activeStepIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Overview Context Header */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span>Historical Precedent & Economic Statecraft</span>
            <span>·</span>
            <span>Trilateral SME Alignment (2023)</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            The US-Netherlands-Japan Trilateral Export Control Agreement
          </h2>
          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            In late 2022, the United States discovered a critical structural limit to unilateral power: restricting American equipment merely incentivized Chinese fabricators to source twin systems from ASML (Netherlands) and Tokyo Electron (Japan). Achieving unified trilateral export restrictions required intense technical diplomacy, establishing the first plurilateral governance framework of the modern silicon war.
          </p>
        </div>
      </div>

      {/* Interactive Milestone Stepper / Timeline */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Diplomatic Evolution & Enforcement Timeline</span>
            </h3>
            <p className="text-xs text-slate-400">
              Interactive progression from unilateral sanctions to plurilateral enforcement
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Step {activeStepIndex + 1} of {TIMELINE_MILESTONES.length}
          </span>
        </div>

        {/* Milestone Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {TIMELINE_MILESTONES.map((m, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={m.date}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2.5 rounded-lg text-left transition-all border ${
                  isActive
                    ? 'bg-slate-800 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {m.quarter}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${
                    m.category === 'unilateral' ? 'bg-cyan-400' :
                    m.category === 'diplomacy' ? 'bg-emerald-400' :
                    m.category === 'regulation' ? 'bg-blue-400' : 'bg-rose-400'
                  }`} />
                </div>
                <div className="text-xs font-semibold text-slate-200 line-clamp-1">
                  {m.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Focus Card */}
        {activeMilestone && (
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                    {activeMilestone.date}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-300 font-medium">
                    Led by: {activeMilestone.actor}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {activeMilestone.title}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Geopolitical Impact:</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                  {activeMilestone.impactScore} / 10
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeMilestone.description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 font-mono uppercase tracking-wider block mb-2">
                Key Strategic Outcomes & Friction Points:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activeMilestone.keyOutcomes.map((outcome, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Comparative Matrix Table */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Comparative Trilateral Chokepoint Matrix</span>
            </h3>
            <p className="text-xs text-slate-400">
              Technical division of labor, key corporate champions, and economic exposure
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search nation, champions, tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-slate-800 rounded-lg">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Nation / Bloc</th>
                <th className="py-3 px-4 font-semibold">Primary Chokepoints Controlled</th>
                <th className="py-3 px-4 font-semibold">Key Corporate Champions</th>
                <th className="py-3 px-4 font-semibold">Policy Stance</th>
                <th className="py-3 px-4 font-semibold text-right">Economic Exposure</th>
                <th className="py-3 px-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredActors.map((actor) => {
                const isSelected = selectedActor?.id === actor.id;
                return (
                  <tr
                    key={actor.id}
                    onClick={() => setSelectedActor(actor)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-slate-800/80' : 'hover:bg-slate-850/50 bg-slate-900/40'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-semibold text-slate-100 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{actor.flag}</span>
                        <span>{actor.jurisdiction}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-xs">
                      {actor.primaryChokepoint}
                    </td>
                    <td className="py-3.5 px-4 text-cyan-300 font-medium max-w-xs">
                      {actor.champions.join(', ')}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      {actor.policyStance}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold ${
                        actor.economicRiskLevel === 'Severe'
                          ? 'bg-rose-950/70 text-rose-300 border border-rose-500/40'
                          : 'bg-amber-950/70 text-amber-300 border border-amber-500/40'
                      }`}>
                        {actor.chinaRevenueExposure}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedActor(actor);
                        }}
                        className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] font-semibold"
                      >
                        {isSelected ? 'Viewing' : 'Inspect →'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Actor Detailed Profile */}
        {selectedActor && (
          <div className="mt-4 p-5 rounded-xl bg-slate-950/90 border border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedActor.flag}</span>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{selectedActor.jurisdiction} — Detailed Strategic Profile</span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    Champions: {selectedActor.champions.join(' · ')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-400 block">China Revenue Share</span>
                <span className="text-sm font-mono font-bold text-amber-400">
                  {selectedActor.chinaRevenueExposure}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-3">
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-cyan-300 block mb-1 font-mono uppercase text-[11px]">
                    2023 Alignment Scope & Legal Mandate
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedActor.alignmentScope}
                  </p>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-emerald-300 block mb-1 font-mono uppercase text-[11px]">
                    Diplomatic Motivation & Strategic Rationale
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedActor.diplomaticMotivation}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-rose-300 block mb-2 font-mono uppercase text-[11px]">
                    Critical Equipment & IP Restricted Under Framework
                  </span>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    {selectedActor.criticalToolsRestricted.map((tool, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-amber-300 block mb-1 font-mono uppercase text-[11px]">
                    Vulnerability to Retaliation & Backlash
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedActor.vulnerabilityToBacklash}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Diplomatic Legacy Callout */}
      <section className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
        <div className="space-y-1.5">
          <span className="font-mono font-bold text-cyan-400 uppercase text-[11px]">
            Precedent 1: Validation of "Small Yard, High Fence"
          </span>
          <p className="leading-relaxed text-slate-400">
            Proved that democratic allied nations can align narrow, militarily decisive technology restrictions without severing hundreds of billions of dollars in bilateral trade. Prevents domestic political paralysis by protecting mature-node consumer commerce.
          </p>
        </div>
        <div className="space-y-1.5">
          <span className="font-mono font-bold text-amber-400 uppercase text-[11px]">
            Precedent 2: Plurilateral Governance Architecture
          </span>
          <p className="leading-relaxed text-slate-400">
            Bypassed the obsolete 42-nation Wassenaar Arrangement (stalled by Russian consensus vetoes) in favor of agile, technical minilateral pacts between the three nations that physically manufacture all advanced lithography and etching tools.
          </p>
        </div>
      </section>
    </div>
  );
};
