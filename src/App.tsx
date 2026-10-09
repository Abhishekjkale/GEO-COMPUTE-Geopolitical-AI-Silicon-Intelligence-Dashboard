import React, { useState } from 'react';
import { TabId } from './types/dashboard';
import { Navbar } from './components/Navbar';
import { ExecutiveOverviewTab } from './components/tabs/ExecutiveOverviewTab';
import { TrilateralCaseStudyTab } from './components/tabs/TrilateralCaseStudyTab';
import { AsymmetricLeverageTab } from './components/tabs/AsymmetricLeverageTab';
import { FutureMindMapTab } from './components/tabs/FutureMindMapTab';
import { RiskSimulatorTab } from './components/tabs/RiskSimulatorTab';
import { GlossaryModal } from './components/GlossaryModal';
import { ExportModal } from './components/ExportModal';
import {
  FileText,
  Printer,
  Shield,
  BookOpen,
  Sliders,
  ExternalLink,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossaryInitialTerm, setGlossaryInitialTerm] = useState<string | null>(null);

  const handleOpenGlossary = (term?: string) => {
    setGlossaryInitialTerm(term || null);
    setIsGlossaryOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header / Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenGlossary={() => handleOpenGlossary()}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <ExecutiveOverviewTab
            onOpenGlossary={handleOpenGlossary}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'trilateral' && (
          <TrilateralCaseStudyTab
            onOpenGlossary={handleOpenGlossary}
          />
        )}

        {activeTab === 'asymmetric' && (
          <AsymmetricLeverageTab
            onOpenGlossary={handleOpenGlossary}
            onNavigateTab={() => setActiveTab('simulator')}
          />
        )}

        {activeTab === 'mindmap' && (
          <FutureMindMapTab
            onOpenGlossary={handleOpenGlossary}
            onNavigateTab={() => setActiveTab('simulator')}
          />
        )}

        {activeTab === 'simulator' && (
          <RiskSimulatorTab
            onOpenGlossary={handleOpenGlossary}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/60 py-6 text-xs text-slate-400 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-mono text-cyan-400 font-bold">
              GEO-COMPUTE INTELLIGENCE
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400">
              Strategic Intelligence Report: Technology & Security (AI Hardware & Export Controls)
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => handleOpenGlossary()}
              className="hover:text-cyan-300 transition-colors"
            >
              Lexicon Dictionary
            </button>
            <span>·</span>
            <button
              onClick={() => setIsExportOpen(true)}
              className="hover:text-cyan-300 transition-colors"
            >
              Export Intelligence
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="Scroll to top"
            >
              <span>Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Lexicon / Technical Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => {
          setIsGlossaryOpen(false);
          setGlossaryInitialTerm(null);
        }}
        selectedInitialTerm={glossaryInitialTerm}
      />

      {/* Export / Print Briefing Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
