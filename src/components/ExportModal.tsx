import React, { useState } from 'react';
import {
  KPI_METRICS,
  CHOKEPOINT_DEEP_DIVES,
  TRILATERAL_ACTORS,
  TIMELINE_MILESTONES,
  ASYMMETRIC_STRATEGIES,
  MIND_MAP_DOMAINS,
  GLOSSARY_TERMS,
} from '../data/intelligenceData';
import { X, Printer, Download, Copy, Check, FileText, Code } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedMd, setCopiedMd] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    setDownloading(true);
    const fullDataset = {
      reportTitle: "The Geopolitics of Artificial Intelligence, Compute, and Technological Decoupling",
      classification: "Strategic Intelligence Briefing / Public Release",
      exportTimestamp: new Date().toISOString(),
      kpiMetrics: KPI_METRICS,
      chokepoints: CHOKEPOINT_DEEP_DIVES,
      trilateralCaseStudy: {
        actors: TRILATERAL_ACTORS,
        timeline: TIMELINE_MILESTONES,
      },
      asymmetricLeverage: ASYMMETRIC_STRATEGIES,
      futureMindMap: MIND_MAP_DOMAINS,
      glossary: GLOSSARY_TERMS,
    };

    const blob = new Blob([JSON.stringify(fullDataset, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GEO_COMPUTE_INTELLIGENCE_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(false), 800);
  };

  const handleCopyMarkdown = () => {
    const md = `# STRATEGIC INTELLIGENCE REPORT
## The Geopolitics of Artificial Intelligence, Compute, and Technological Decoupling
**Status:** Active Monitoring | **Classification:** Open Strategic Briefing

### 1. Executive Summary & Core Concept
* Compute is the ultimate geopolitical chokepoint. Hardware density and semiconductor manufacturing equipment (SME) have replaced data volume as the premier source of geopolitical leverage.
* **GPU Concentration:** Nvidia / US: 92% of frontier AI training accelerator market.
* **EUV Monopoly:** ASML / NL: 100% of extreme ultraviolet 13.5nm scanners.
* **Foundry Concentration:** TSMC / Taiwan: >90% of leading-edge sub-7nm logic.
* **Compute Divide:** 14:1 ratio between Allied bloc and Global South.

### 2. Trilateral Export Control Case Study (2023)
* **United States:** Dominates EDA design software (Synopsys, Cadence) & accelerator architectures. Imposed sweeping Oct 2022 & Oct 2023 BIS controls.
* **Netherlands:** Dominates EUV/DUV photolithography (ASML). Harmonized via Dutch export regulations on Twinscan NXT:2000i series.
* **Japan:** Dominates photoresist chemistry & 23 SME categories (Tokyo Electron, Nikon, Canon).

### 3. Asymmetric Chinese Countermeasures
1. **Critical Mineral Monopolies:** Gallium (80%+ global supply), Germanium (60%+), Graphite, and Heavy Rare Earths export restrictions.
2. **Mature Node Saturation:** Flooding 28nm+ legacy nodes to create Western industrial, automotive, and defense dependencies.
3. **Circumvention Networks:** Third-party transit hubs (UAE, Singapore, Malaysia) and cloud compute leasing.
4. **Domestic Substitution:** National IC Fund ("Big Fund" Phase III $47.5B) + DUV multi-patterning + Chiplet packaging.

### 4. Flashpoint Domains & War-Game Outlook
* **Taiwan Strait Risk:** TSMC cleanrooms represent the single point of failure; estimated $10T global GDP shock upon blockade.
* **Infrastructure Sabotage:** Undersea trans-oceanic fiber cables & high-power electric substations become primary targets.
* **Bifurcated Technology Stack:** Incompatible Western (CUDA/EUV) and Eastern (Ascend/CANN/DUV) technological spheres.
`;

    navigator.clipboard.writeText(md).then(() => {
      setCopiedMd(true);
      setTimeout(() => setCopiedMd(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#0f172a] border border-slate-700/80 rounded-xl w-full max-w-xl flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="export-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="export-title" className="text-base font-bold text-slate-100">
                Export Intelligence Report & Summary
              </h2>
              <p className="text-xs text-slate-400">
                Generate clean print documents, raw intelligence datasets, or briefing memos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close export modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Export Options */}
        <div className="p-6 space-y-4">
          {/* Option 1: Browser Print / PDF */}
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-100 block">
                  Print Formatted Executive Briefing (PDF)
                </span>
                <span className="text-xs text-slate-400 block">
                  Triggers system print dialog with dark/light optimized print layout
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 group-hover:underline">Print / PDF →</span>
          </button>

          {/* Option 2: Download JSON Dataset */}
          <button
            onClick={handleDownloadJson}
            disabled={downloading}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-100 block">
                  Download Full JSON Intelligence Dataset
                </span>
                <span className="text-xs text-slate-400 block">
                  Complete structured data for automated pipeline ingestion and research
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 group-hover:underline">
              {downloading ? 'Exporting...' : '.JSON File →'}
            </span>
          </button>

          {/* Option 3: Copy Markdown Summary */}
          <button
            onClick={handleCopyMarkdown}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-950/70 border border-amber-500/30 text-amber-400 group-hover:scale-105 transition-transform">
                {copiedMd ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-100 block">
                  {copiedMd ? 'Copied to Clipboard!' : 'Copy Executive Markdown Briefing'}
                </span>
                <span className="text-xs text-slate-400 block">
                  Formatted markdown text summary for Slack, Jira, or email dispatch
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-400 group-hover:underline">
              {copiedMd ? 'Copied ✓' : 'Copy Text →'}
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
