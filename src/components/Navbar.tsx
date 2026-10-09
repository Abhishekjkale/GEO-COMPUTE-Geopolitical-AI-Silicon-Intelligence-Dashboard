import React from 'react';
import { TabId } from '../types/dashboard';
import {
  Activity,
  Layers,
  Scale,
  Shield,
  GitBranch,
  Sliders,
  FileDown,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onOpenExport: () => void;
  onOpenGlossary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenExport,
  onOpenGlossary,
}) => {
  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: '1. Executive Overview', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'trilateral', label: '2. Trilateral Case Study', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'asymmetric', label: '3. Asymmetric Leverage', icon: <Shield className="w-3.5 h-3.5" /> },
    { id: 'mindmap', label: '4. Future Mind Map & Scenarios', icon: <GitBranch className="w-3.5 h-3.5" /> },
    { id: 'simulator', label: '5. Interactive Risk Simulator', icon: <Sliders className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand & Live Indicator */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold tracking-wider font-mono text-cyan-400">
                GEO-COMPUTE
              </span>
              <span className="text-slate-600 font-mono hidden sm:inline">//</span>
              <span className="text-xs font-medium text-slate-300 hidden md:inline truncate max-w-xs lg:max-w-md">
                Geopolitical AI & Silicon Intelligence Dashboard
              </span>
            </div>

            {/* Live Status Indicator: Pulsing Green LED */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="whitespace-nowrap font-semibold">STATUS: ACTIVE MONITORING</span>
            </div>
          </div>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenGlossary}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              title="Open Technical Glossary (EUV, DUV, GAAFET, CoWoS)"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Lexicon</span>
            </button>

            <button
              onClick={onOpenExport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <FileDown className="w-3.5 h-3.5 text-slate-950" />
              <span>Export Report / Print</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Row */}
        <nav className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-slate-800/60 pt-1.5" aria-label="Dashboard Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-500'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
