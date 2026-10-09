export type TabId = 'overview' | 'trilateral' | 'asymmetric' | 'mindmap' | 'simulator';

export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  entity: string;
  subtext: string;
  badge: string;
  badgeColor: 'amber' | 'cyan' | 'emerald' | 'rose';
  trend: string;
  source: string;
}

export interface ChokepointDeepDive {
  id: string;
  title: string;
  tagline: string;
  quote?: string;
  summary: string;
  strategicPoints: string[];
  vulnerabilities: string[];
  implications: string[];
  accentColor: string;
}

export interface TrilateralActor {
  id: string;
  jurisdiction: string;
  flag: string;
  champions: string[];
  primaryChokepoint: string;
  alignmentScope: string;
  policyStance: string;
  economicRiskLevel: 'High' | 'Severe' | 'Critical';
  chinaRevenueExposure: string;
  criticalToolsRestricted: string[];
  diplomaticMotivation: string;
  vulnerabilityToBacklash: string;
}

export interface TimelineMilestone {
  date: string;
  quarter: string;
  title: string;
  actor: string;
  category: 'unilateral' | 'diplomacy' | 'regulation' | 'backlash';
  description: string;
  impactScore: number; // 1-10
  keyOutcomes: string[];
}

export interface AsymmetricStrategy {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  threatLevel: 'High' | 'Severe' | 'Critical';
  westernVulnerabilityScore: number; // 0-100
  chineseDominanceScore: number; // 0-100
  summary: string;
  mechanisms: string[];
  keyMaterialsOrNodes: string[];
  westernCountermeasures: string[];
}

export interface MindMapDomain {
  id: string;
  title: string;
  color: string;
  nodes: MindMapNode[];
}

export interface MindMapNode {
  id: string;
  label: string;
  probability: number; // percentage
  impact: 'Moderate' | 'High' | 'Critical' | 'Catastrophic';
  timeframe: string;
  analysis: string;
  keyDrivers: string[];
  escalationTriggers: string[];
}

export interface SimulationState {
  sanctionSeverity: number; // 1 - 10
  mineralRestriction: number; // 0 - 100
  taiwanBlockadeRisk: boolean;
  bigFundEfficiency: number; // 10 - 90
  middleEastLeakage: boolean;
}

export interface SimulationResults {
  gpuPriceSurge: number; // %
  supplyChainDisruptionScore: number; // 0 - 100
  timeToImpactMonths: number;
  aiDelayFactor: number; // e.g. 1.4x
  westernLegacyChipDeficit: number; // %
  threatLevelText: string;
  threatLevelColor: string;
  executiveAssessment: string;
  sectorImpacts: {
    sector: string;
    impact: 'Low' | 'Medium' | 'Severe' | 'Paralysis';
    details: string;
  }[];
}

export interface GlossaryTerm {
  term: string;
  fullName: string;
  definition: string;
  geopoliticalSignificance: string;
  keyHolders: string;
}
