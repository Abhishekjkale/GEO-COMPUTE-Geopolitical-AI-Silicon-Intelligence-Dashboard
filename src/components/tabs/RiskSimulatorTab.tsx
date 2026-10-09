import React, { useState, useMemo } from 'react';
import { SimulationState, SimulationResults } from '../../types/dashboard';
import {
  Sliders,
  AlertTriangle,
  RotateCcw,
  Zap,
  TrendingUp,
  Clock,
  Gauge,
  ShieldAlert,
  Flame,
  CheckCircle2,
  Info
} from 'lucide-react';

interface RiskSimulatorTabProps {
  onOpenGlossary: (term?: string) => void;
}

export const RiskSimulatorTab: React.FC<RiskSimulatorTabProps> = ({
  onOpenGlossary,
}) => {
  // Simulator State
  const [state, setState] = useState<SimulationState>({
    sanctionSeverity: 6, // 1 - 10
    mineralRestriction: 30, // 0 - 100 %
    taiwanBlockadeRisk: false, // Boolean
    bigFundEfficiency: 45, // 10 - 90 %
    middleEastLeakage: true, // Boolean
  });

  // Presets
  const applyPreset = (presetName: string) => {
    switch (presetName) {
      case 'baseline':
        setState({
          sanctionSeverity: 5,
          mineralRestriction: 20,
          taiwanBlockadeRisk: false,
          bigFundEfficiency: 40,
          middleEastLeakage: true,
        });
        break;
      case 'max-decoupling':
        setState({
          sanctionSeverity: 10,
          mineralRestriction: 50,
          taiwanBlockadeRisk: false,
          bigFundEfficiency: 60,
          middleEastLeakage: false,
        });
        break;
      case 'mineral-embargo':
        setState({
          sanctionSeverity: 6,
          mineralRestriction: 95,
          taiwanBlockadeRisk: false,
          bigFundEfficiency: 50,
          middleEastLeakage: true,
        });
        break;
      case 'taiwan-crisis':
        setState({
          sanctionSeverity: 9,
          mineralRestriction: 90,
          taiwanBlockadeRisk: true,
          bigFundEfficiency: 75,
          middleEastLeakage: false,
        });
        break;
      case 'de-escalation':
        setState({
          sanctionSeverity: 2,
          mineralRestriction: 5,
          taiwanBlockadeRisk: false,
          bigFundEfficiency: 30,
          middleEastLeakage: true,
        });
        break;
      default:
        break;
    }
  };

  // Real-Time Calculation Engine
  const results: SimulationResults = useMemo(() => {
    const {
      sanctionSeverity,
      mineralRestriction,
      taiwanBlockadeRisk,
      bigFundEfficiency,
      middleEastLeakage,
    } = state;

    // 1. GPU Price Surge Calculation (%)
    let priceSurge = Math.round(
      sanctionSeverity * 4.5 +
      mineralRestriction * 0.35 +
      (middleEastLeakage ? 0 : 25)
    );
    if (taiwanBlockadeRisk) {
      priceSurge += 310; // Taiwan produces 90%+ of AI accelerators
    }

    // 2. Supply Chain Disruption Index (0 - 100)
    let disruption = Math.round(
      sanctionSeverity * 3.2 +
      mineralRestriction * 0.42 +
      (middleEastLeakage ? 0 : 8)
    );
    if (taiwanBlockadeRisk) {
      disruption = Math.min(100, disruption + 48);
    }
    disruption = Math.max(5, Math.min(100, disruption));

    // 3. Time to Impact (Months)
    let months = 18 - (sanctionSeverity * 0.9) - (mineralRestriction * 0.08);
    if (!middleEastLeakage) months -= 2.5;
    if (taiwanBlockadeRisk) months = 0.5; // Immediate shock
    months = Math.max(0.5, Math.round(months * 10) / 10);

    // 4. Strategic AI Development Delay Factor
    let delay = 1.0 + (sanctionSeverity * 0.12) + (mineralRestriction * 0.008);
    if (taiwanBlockadeRisk) delay += 2.8;
    if (!middleEastLeakage) delay += 0.4;
    delay = Math.round(delay * 10) / 10;

    // 5. Western Legacy Chip Deficit (%)
    const legacyDeficit = Math.round(
      (mineralRestriction * 0.45) + (sanctionSeverity * 1.8) + (taiwanBlockadeRisk ? 35 : 0)
    );

    // Threat level classification
    let threatLevelText = 'Moderate Stress';
    let threatLevelColor = 'cyan';
    if (disruption > 80 || taiwanBlockadeRisk) {
      threatLevelText = 'CATASTROPHIC CRISIS';
      threatLevelColor = 'rose';
    } else if (disruption > 55) {
      threatLevelText = 'SEVERE DISRUPTION';
      threatLevelColor = 'amber';
    } else if (disruption > 30) {
      threatLevelText = 'ELEVATED FRICTION';
      threatLevelColor = 'cyan';
    } else {
      threatLevelText = 'NOMINAL EQUILIBRIUM';
      threatLevelColor = 'emerald';
    }

    // Executive assessment text generator
    let executiveAssessment = '';
    if (taiwanBlockadeRisk) {
      executiveAssessment =
        'CRITICAL ALERT: Taiwan Strait interdiction paralyzes global semiconductor foundries within 14 days. Advanced AI accelerator fabrication halts completely, triggering catastrophic rationing across all Western hyperscalers and immediate defense equipment inventory freezes.';
    } else if (mineralRestriction > 75) {
      executiveAssessment =
        'HIGH THREAT: Severe Chinese mineral embargo (Gallium/Germanium/Graphite >75%) cripples Western defense radar (AESA), electric vehicle power electronics, and silicon wafer polishing. Automotive assembly lines face rolling halts within 4 months despite existing stockpiles.';
    } else if (sanctionSeverity >= 8) {
      executiveAssessment =
        'INTENSE DECOUPLING: Maximalist export controls sever high-end silicon and cloud KYC access. Chinese state mobilization through the "Big Fund" and chiplets achieves partial domestic substitution, while Western chipmakers absorb severe revenue reductions.';
    } else {
      executiveAssessment =
        'MANAGED DE-RISKING: "Small Yard, High Fence" operates within manageable economic parameters. Circumvention channels and commercial mature-node trade provide stabilizing buffers, though structural bifurcation continues to deepen.';
    }

    // Sector impacts
    const sectorImpacts = [
      {
        sector: 'Western AI Hyperscalers',
        impact: (taiwanBlockadeRisk ? 'Paralysis' : sanctionSeverity > 7 ? 'Severe' : 'Medium') as any,
        details: taiwanBlockadeRisk
          ? 'Near-total delivery freeze on Nvidia B200/H200 and custom ASICs. Multi-year training cluster freezes.'
          : 'Price inflation on clusters; secondary cloud capacity constraints; extended lead times up to 48 weeks.',
      },
      {
        sector: 'Automotive & Industrial OEMs',
        impact: (mineralRestriction > 60 || taiwanBlockadeRisk ? 'Severe' : 'Low') as any,
        details: mineralRestriction > 60
          ? 'Acute shortage of SiC/GaN power inverters and 28nm microcontrollers, reviving 2021-era supply chain shutdowns.'
          : 'Stable baseline under current stockpiles; growing reliance on subsidized Chinese 28nm fabs.',
      },
      {
        sector: 'Defense & Aerospace Systems',
        impact: (mineralRestriction > 70 || taiwanBlockadeRisk ? 'Paralysis' : 'Medium') as any,
        details: mineralRestriction > 70
          ? 'Gallium choke throttles AESA radar procurement and missile seekers; Title III emergency defense acts required.'
          : 'Protected by national strategic reserves (estimated 6-12 month critical mineral cushion).',
      },
      {
        sector: 'Chinese Domestic AI Champions',
        impact: (taiwanBlockadeRisk ? 'Severe' : sanctionSeverity > 8 && !middleEastLeakage ? 'Severe' : 'Medium') as any,
        details: sanctionSeverity > 8 && !middleEastLeakage
          ? 'Enforces reliance on lower-yield Huawei Ascend 910B/910C clusters; algorithmic efficiency prioritized.'
          : 'Mitigated by transshipment channels, overseas cloud rental arbitrage, and domestic chiplet packaging.',
      },
    ];

    return {
      gpuPriceSurge: priceSurge,
      supplyChainDisruptionScore: disruption,
      timeToImpactMonths: months,
      aiDelayFactor: delay,
      westernLegacyChipDeficit: legacyDeficit,
      threatLevelText,
      threatLevelColor,
      executiveAssessment,
      sectorImpacts,
    };
  }, [state]);

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'Paralysis':
        return 'bg-red-950/80 text-red-300 border-red-500/60 font-bold';
      case 'Severe':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/50';
      case 'Medium':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50';
      default:
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Overview Context Header */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span>Dynamic Scenario Modeling</span>
            <span>·</span>
            <span>Geopolitical War-Game Engine</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Interactive AI Compute & Supply Chain Risk Simulator
          </h2>
          <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
            Test policy levers, trade sanctions, retaliatory mineral export quotas, and kinetic conflict flashpoints in real time. The reactive calculation engine evaluates price surges, systemic disruption scores, and delay factors across global tech ecosystems.
          </p>
        </div>
      </div>

      {/* Preset Scenarios Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-mono text-[11px] whitespace-nowrap uppercase tracking-wider">
          Simulation Presets:
        </span>
        <button
          onClick={() => applyPreset('baseline')}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 whitespace-nowrap transition-colors"
        >
          2024 Status Quo
        </button>
        <button
          onClick={() => applyPreset('max-decoupling')}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-cyan-300 border border-slate-800 whitespace-nowrap transition-colors"
        >
          Maximalist Decoupling
        </button>
        <button
          onClick={() => applyPreset('mineral-embargo')}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-amber-300 border border-slate-800 whitespace-nowrap transition-colors"
        >
          Critical Mineral Embargo
        </button>
        <button
          onClick={() => applyPreset('taiwan-crisis')}
          className="px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/40 whitespace-nowrap transition-colors font-bold"
        >
          ⚠ Taiwan Strait Kinetic Crisis
        </button>
        <button
          onClick={() => applyPreset('de-escalation')}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-emerald-300 border border-slate-800 whitespace-nowrap transition-colors"
        >
          Diplomatic De-escalation
        </button>
      </div>

      {/* Main Simulator Grid: Controls (Left) vs Real-Time Outputs (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Levers & Sliders (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Policy & Escalation Levers</span>
            </h3>
            <button
              onClick={() => applyPreset('baseline')}
              className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Slider 1: US Sanctions Severity */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-200">
                1. US Export Sanction Severity
              </span>
              <span className="font-mono font-bold text-cyan-400 text-sm">
                Level {state.sanctionSeverity} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={state.sanctionSeverity}
              onChange={(e) =>
                setState((s) => ({ ...s, sanctionSeverity: Number(e.target.value) }))
              }
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Targeted AI Chips (1)</span>
              <span>Total Cloud & Equipment Ban (10)</span>
            </div>
          </div>

          {/* Slider 2: China Mineral Restrictions */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-200">
                2. China Critical Mineral Export Restrictions
              </span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {state.mineralRestriction}% Embargo
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={state.mineralRestriction}
              onChange={(e) =>
                setState((s) => ({ ...s, mineralRestriction: Number(e.target.value) }))
              }
              className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Open Licensing (0%)</span>
              <span>Total Gallium/Germanium Cutoff (100%)</span>
            </div>
          </div>

          {/* Toggle: Taiwan Strait Blockade */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <AlertTriangle className={`w-4 h-4 ${state.taiwanBlockadeRisk ? 'text-rose-400' : 'text-slate-500'}`} />
                <span className="text-xs font-bold text-slate-200">
                  Taiwan Strait Maritime Blockade
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Physical quarantine of TSMC fabs (<span className="text-rose-400">&gt;90% global &lt;7nm output</span>)
              </p>
            </div>
            <button
              onClick={() =>
                setState((s) => ({ ...s, taiwanBlockadeRisk: !s.taiwanBlockadeRisk }))
              }
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                state.taiwanBlockadeRisk
                  ? 'bg-rose-600 text-white shadow-lg ring-2 ring-rose-500/50'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {state.taiwanBlockadeRisk ? 'ACTIVE ⚠' : 'Inactive'}
            </button>
          </div>

          {/* Slider 3: Chinese Big Fund Domestic Substitution Efficiency */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-200">
                4. Chinese Domestic Substitution Efficiency
              </span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {state.bigFundEfficiency}% Yield
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              step="5"
              value={state.bigFundEfficiency}
              onChange={(e) =>
                setState((s) => ({ ...s, bigFundEfficiency: Number(e.target.value) }))
              }
              className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Severe DUV Bottlenecks (10%)</span>
              <span>Advanced Chiplet Parity (90%)</span>
            </div>
          </div>

          {/* Toggle 2: Third-Party Middle East / SE Asia Transshipment */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-200 block">
                Third-Party Transshipment Channels
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Gulf / SE Asia hubs enabling GPU smuggling & cloud arbitrage
              </p>
            </div>
            <button
              onClick={() =>
                setState((s) => ({ ...s, middleEastLeakage: !s.middleEastLeakage }))
              }
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                state.middleEastLeakage
                  ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {state.middleEastLeakage ? 'Permissive' : 'Blocked'}
            </button>
          </div>
        </div>

        {/* Right Column: Real-Time Dynamic Outputs & Impact Assessment (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Real-time Threat Status Banner */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            results.threatLevelColor === 'rose'
              ? 'bg-rose-950/70 border-rose-500/50 text-rose-200'
              : results.threatLevelColor === 'amber'
              ? 'bg-amber-950/70 border-amber-500/50 text-amber-200'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black/40">
                <Gauge className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75">
                  Real-Time Conflict Posture
                </span>
                <span className="text-base font-extrabold font-mono tracking-tight">
                  {results.threatLevelText}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono opacity-80 block">
                Disruption Score
              </span>
              <span className="text-2xl font-bold font-mono tabular-nums">
                {results.supplyChainDisruptionScore} <span className="text-sm font-normal">/ 100</span>
              </span>
            </div>
          </div>

          {/* 4 Core Output Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Metric 1: GPU Price Surge */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Global GPU Price Surge
              </span>
              <span className={`text-2xl font-extrabold font-mono tabular-nums ${
                results.gpuPriceSurge > 100 ? 'text-rose-400' : 'text-amber-400'
              }`}>
                +{results.gpuPriceSurge}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                Frontier accelerator spot
              </span>
            </div>

            {/* Metric 2: Supply Chain Disruption Index */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Disruption Index
              </span>
              <span className="text-2xl font-extrabold font-mono tabular-nums text-white">
                {results.supplyChainDisruptionScore}
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                Aggregate supply shock
              </span>
            </div>

            {/* Metric 3: Time to Impact */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Time-to-Impact
              </span>
              <span className="text-2xl font-extrabold font-mono tabular-nums text-cyan-300">
                {results.timeToImpactMonths} <span className="text-xs font-normal">mo</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                Western buffer run-out
              </span>
            </div>

            {/* Metric 4: AI Development Delay Factor */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                AI Roadmap Delay
              </span>
              <span className="text-2xl font-extrabold font-mono tabular-nums text-emerald-400">
                {results.aiDelayFactor}x
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                Cluster scaling slowdown
              </span>
            </div>
          </div>

          {/* Dynamic Strategic Debrief Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Automated War-Game Intelligence Debrief
              </h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/80 p-3.5 rounded-lg border border-slate-800/80 font-sans">
              {results.executiveAssessment}
            </p>
          </div>

          {/* Sector-by-Sector Impact Breakdown */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Cross-Sector Vulnerability Matrix
              </h4>
              <span className="text-[11px] text-slate-500 font-mono">Real-time projection</span>
            </div>

            <div className="space-y-2">
              {results.sectorImpacts.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-200 block">
                      {sec.sector}
                    </span>
                    <p className="text-[11px] text-slate-400">
                      {sec.details}
                    </p>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono shrink-0 self-start sm:self-center border uppercase ${getImpactBadge(sec.impact)}`}>
                    {sec.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
