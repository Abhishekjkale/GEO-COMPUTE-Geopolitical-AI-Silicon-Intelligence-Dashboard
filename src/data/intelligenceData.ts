import {
  KpiMetric,
  ChokepointDeepDive,
  TrilateralActor,
  TimelineMilestone,
  AsymmetricStrategy,
  MindMapDomain,
  GlossaryTerm,
} from '../types/dashboard';

export const KPI_METRICS: KpiMetric[] = [
  {
    id: 'gpu-concentration',
    title: 'Advanced AI Accelerator Market Share',
    value: '92%',
    entity: 'NVIDIA (United States)',
    subtext: 'Dominance across frontier LLM training clusters (H100/H200/B200 architecture and CUDA software moat).',
    badge: 'Hardware Hegemony',
    badgeColor: 'cyan',
    trend: '+4% YoY',
    source: 'TechInsights & IDC Frontier AI Hardware Census',
  },
  {
    id: 'euv-monopoly',
    title: 'Extreme UV (EUV) Lithography Monopoly',
    value: '100%',
    entity: 'ASML (Veldhoven, Netherlands)',
    subtext: 'Exclusive commercial maker of 13.5nm wavelength scanners required for sub-7nm fabrication.',
    badge: 'Absolute Chokepoint',
    badgeColor: 'amber',
    trend: 'Indispensable',
    source: 'ASML Annual Security Disclosure & SEMI',
  },
  {
    id: 'tsmc-foundry',
    title: 'Leading-Edge Foundry Output (<7nm)',
    value: '>90%',
    entity: 'TSMC (Hsinchu & Tainan, Taiwan)',
    subtext: 'Taiwan Strait represents the ultimate single point of failure for the entire global digital economy.',
    badge: 'Geographic Chokepoint',
    badgeColor: 'rose',
    trend: 'High Vulnerability',
    source: 'Boston Consulting Group & SIA Supply Chain Review',
  },
  {
    id: 'compute-divide',
    title: 'Global Compute Density Gap',
    value: '14 : 1',
    entity: 'US/Allied Bloc vs. Global South',
    subtext: 'Disparity in cluster-grade PFLOPS allocated per capita, threatening severe technological vassalage.',
    badge: 'Structural Inequality',
    badgeColor: 'emerald',
    trend: 'Widening Divide',
    source: 'Stanford HAI AI Index & UN Technology Report',
  },
];

export const CHOKEPOINT_DEEP_DIVES: ChokepointDeepDive[] = [
  {
    id: 'compute-chokepoint',
    title: 'Compute as the Ultimate Geopolitical Chokepoint',
    tagline: 'Migration from software governance to physical silicon substrates and SME leverage.',
    quote: 'Geopolitical advantage has migrated from data abundance to compute density. He who controls the physical fabrication of advanced accelerators controls the trajectory of artificial general intelligence and modern military power.',
    summary: 'For over a decade, digital technology policy focused on software, internet platforms, and algorithmic governance. The rapid rise of transformer foundation models transformed AI into a capital-intensive physical engineering race. Training frontier models requires cluster-scale hardware architectures (100,000+ accelerators, terabytes/sec interconnects, multi-gigawatt power substations) that only three allied jurisdictions and a handful of corporations can construct. Controlling the physical semiconductor value chain has become the highest-leverage sanction tool of 21st-century statecraft.',
    strategicPoints: [
      'Scale Law Inflexibility: Model capability scales predictably with compute (FLOPs), turning hardware volume into national strategic superiority.',
      'Extreme Capital Barriers: Building next-generation 2nm fabs exceeds $20B per facility, making domestic supply chain duplication prohibitive for isolated powers.',
      'Precision Machinery Dependencies: An advanced EUV scanner relies on 100,000+ specialized parts from over 5,000 suppliers worldwide (Zeiss mirrors, Cymer laser sources, Trumpf amplifiers).'
    ],
    vulnerabilities: [
      'Zero redundancy in EUV optics: Zeiss (Germany) is the sole manufacturer of mirrors with atomic-scale flatness.',
      'Concentrated packaging: TSMC Chip-on-Wafer-on-Substrate (CoWoS) packaging remains the operational bottleneck for accelerator output.'
    ],
    implications: [
      'Sovereignty relies on physical allied access rather than open-source code.',
      'Export enforcement shifts from port customs to real-time telemetry, remote kill-switches, and cloud verification.'
    ],
    accentColor: 'amber'
  },
  {
    id: 'decoupling-derisking',
    title: 'Decoupling vs. De-risking: "Small Yard, High Fence"',
    tagline: 'The delicate friction between trade containment and systemic economic blowback.',
    summary: 'Western national security policy has moved away from indiscriminate technological decoupling toward the "Small Yard, High Fence" doctrine formulated by Jake Sullivan. This paradigm seeks to isolate foundational, dual-use technologies with direct military applications (sub-16/14nm logic, 3D NAND, GAAFET transistors, advanced packaging) while maintaining billions of dollars in commercial trade in mature-node legacy semiconductors.',
    strategicPoints: [
      'Yard Definition: Precise parametric gates (transistor density, interconnect bandwidth, total processing performance) designed to block AI supercomputing without cratering commercial automotive or smartphone trade.',
      'Fence Enforcement: Multi-layered export licenses, "Foreign Produced Direct Product Rule" (FDPR), and extraterritorial jurisdiction over non-US tools using American software/patents.',
      'Allied Tension: European and East Asian allies face asymmetrical commercial exposure: while US designers maintain vast domestic software markets, ASML and Tokyo Electron rely heavily on sales to Chinese manufacturing fabs.'
    ],
    vulnerabilities: [
      'Yard Creep: Rapid algorithmic efficiency gains and dual-use consumer hardware constantly blur the line between civilian and military compute.',
      'Enforcement Asymmetry: Third-party transshipment hubs (UAE, Singapore, Malaysia) allow illicit bypass networks to flourish.'
    ],
    implications: [
      'Allied cohesion requires persistent intelligence sharing and economic offsets.',
      'Chinese retaliatory pressure focuses on Western raw material vulnerabilities outside the yard.'
    ],
    accentColor: 'cyan'
  },
  {
    id: 'ai-sovereignty',
    title: 'AI Sovereignty & The Looming Compute Divide',
    tagline: 'Frontier data centers as the new 21st-century strategic critical infrastructure.',
    summary: 'Nation-states increasingly treat sovereign compute infrastructure as indispensable to state survival—on par with national electric grids, nuclear arsenals, or satellite constellations. Without domestic compute, countries risk technological vassalage, forced to run their sovereign intelligence, administrative, and defense workloads on cloud infrastructure owned by American or Chinese hyperscalers.',
    strategicPoints: [
      'Sovereign Model Mandate: Nations like France, UAE, Japan, and Singapore are deploying state-backed compute clusters to train culturally aligned, sovereign LLMs.',
      'Energy-Compute Nexus: Compute clusters consuming 500MW to 1GW require dedicated nuclear or renewable baseload power, creating new geopolitical energy alliances.',
      'The Global South Compute Divide: Developing nations unable to finance billion-dollar data centers face generational exclusion from AI-driven productivity gains.'
    ],
    vulnerabilities: [
      'Sovereign lock-in: Sovereign initiatives often remain dependent on Nvidia GPUs and CUDA, leaving them vulnerable to US foreign policy realignments.',
      'Grid constraints: Western and Asian data center expansions are encountering acute electricity grid and substation bottlenecks.'
    ],
    implications: [
      'Emergence of non-aligned "Compute Havens" offering cheap energy and regulatory neutrality.',
      'Widening geopolitical schism between compute-rich empires and compute-poor client states.'
    ],
    accentColor: 'emerald'
  }
];

export const TRILATERAL_ACTORS: TrilateralActor[] = [
  {
    id: 'usa',
    jurisdiction: 'United States',
    flag: '🇺🇸',
    champions: ['NVIDIA', 'Applied Materials', 'Lam Research', 'KLA', 'Synopsys', 'Cadence'],
    primaryChokepoint: 'AI Accelerators (GPU/NPU), Electronic Design Automation (EDA), Deposition/Etch, Optical Inspection',
    alignmentScope: 'Sweeping Oct 2022 & Oct 2023 BIS Controls; total embargo on leading-edge AI chips (A100/H100/B200 tier) and sub-16nm manufacturing equipment.',
    policyStance: 'Aggressive Small Yard, High Fence; active weaponization of extraterritorial FDPR rules.',
    economicRiskLevel: 'High',
    chinaRevenueExposure: '18% - 25% of annual revenues for top equipment and fabless designers.',
    criticalToolsRestricted: [
      'High-bandwidth GPU architectures (H100, H200, B200, customized A800/H800)',
      'GAAFET-capable EDA software licenses (Synopsys, Cadence)',
      'Atomic Layer Deposition (ALD) & Extreme Inspection Tools (Applied Materials, KLA)'
    ],
    diplomaticMotivation: 'Preserve military AI superiority; prevent PLA modernization and algorithmic surveillance scale.',
    vulnerabilityToBacklash: 'Loss of massive Chinese market revenue that historically funded R&D capital expenditure.'
  },
  {
    id: 'netherlands',
    jurisdiction: 'Netherlands',
    flag: '🇳🇱',
    champions: ['ASML', 'ASM International'],
    primaryChokepoint: 'Extreme Ultraviolet (EUV) & Advanced Deep Ultraviolet (Immersion DUV) Photolithography',
    alignmentScope: 'Complete ban on EUV tools; national export licensing regime mandated for advanced immersion DUV (Twinscan NXT:1980 / NXT:2000 series).',
    policyStance: 'Reluctant Multilateral Alignment; seeking to protect corporate revenue while adhering to trans-Atlantic security covenants.',
    economicRiskLevel: 'Severe',
    chinaRevenueExposure: '29% - 39% of ASML total bookings in 2023-2024 as Chinese fabs stockpiled DUV tools.',
    criticalToolsRestricted: [
      'Twinscan EXE:5000 High-NA EUV Systems (0.55 NA)',
      'Twinscan NXE:3400/3600 EUV Systems (13.5nm wavelength)',
      'Twinscan NXT:2000i / 2050i / 2100i Immersion ArFi DUV Scanners'
    ],
    diplomaticMotivation: 'Protect strategic Dutch crown jewel ASML from unilateral US sanctions while upholding NATO security solidarity.',
    vulnerabilityToBacklash: 'Substantial direct exposure to Chinese retaliatory export curbs and long-term domestic Chinese lithography substitution.'
  },
  {
    id: 'japan',
    jurisdiction: 'Japan',
    flag: '🇯🇵',
    champions: ['Tokyo Electron (TEL)', 'Nikon', 'Canon', 'Shin-Etsu Chemical', 'SUMCO', 'JSR Corporation'],
    primaryChokepoint: 'Advanced Photoresist Chemistry, Cleaning/Track Equipment, Atomic Layer Etching, Silicon Wafers',
    alignmentScope: 'Implemented export controls across 23 specific advanced semiconductor equipment categories under Foreign Exchange and Foreign Trade Act (FEFTA).',
    policyStance: 'Strategic Alignment with Domestic Revival; leveraging US partnership to rebuild domestic semiconductor hub (Rapidus, TSMC Kumamoto).',
    economicRiskLevel: 'High',
    chinaRevenueExposure: '22% - 30% of Japanese SME and specialty materials shipments directed to mainland China.',
    criticalToolsRestricted: [
      'EUV Photoresist chemicals and EUV mask blanks (JSR, Shin-Etsu)',
      'High-aspect-ratio atomic layer etching systems (Tokyo Electron)',
      'Cleaning and extreme wet-process track tools for sub-14nm fabrication'
    ],
    diplomaticMotivation: 'Deter cross-strait conflict; safeguard maritime security in East Asia; revive Japanese semiconductor industrial ecosystem.',
    vulnerabilityToBacklash: 'Threat of raw material counter-sanctions and rapid Chinese domestic substitution in wet chemical processing.'
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    date: 'October 7, 2022',
    quarter: 'Q4 2022',
    title: 'US Unilateral Comprehensive Export Controls',
    actor: 'US Dept of Commerce (BIS)',
    category: 'unilateral',
    description: 'Bureau of Industry and Security (BIS) releases historic interim final rule cutting off China from sub-16/14nm logic chips, sub-18nm DRAM, 128+ layer NAND, and US persons working in Chinese fabs.',
    impactScore: 9,
    keyOutcomes: [
      'Nvidia A100/H100 sales to China blocked immediately.',
      'American tool vendors (Applied Materials, Lam) withdraw personnel from Chinese fabs.',
      'Highlights severe unilateral gap: China continues importing DUV tools from ASML and etching gear from Tokyo Electron.'
    ]
  },
  {
    date: 'January 27, 2023',
    quarter: 'Q1 2023',
    title: 'The Secret Trilateral Diplomatic Consensus',
    actor: 'US - Netherlands - Japan Trilateral Accord',
    category: 'diplomacy',
    description: 'National security advisers meet in Washington D.C. to finalize a plurilateral pact aligning technical export controls on advanced semiconductor manufacturing equipment outside the slow Wassenaar framework.',
    impactScore: 10,
    keyOutcomes: [
      'Agreement to coordinate definitions around non-planar transistors and immersion lithography.',
      'Validation of "Small Yard, High Fence" as a multilateral working doctrine.',
      'Terms kept initially confidential to manage domestic political and stock market shocks.'
    ]
  },
  {
    date: 'May 23, 2023',
    quarter: 'Q2 2023',
    title: 'Japan Enacts 23 Advanced SME Control Categories',
    actor: 'Ministry of Economy, Trade & Industry (METI)',
    category: 'regulation',
    description: 'Japan formalizes amendments to its Foreign Exchange and Foreign Trade Act, adding 23 categories of cutting-edge manufacturing equipment without explicitly naming China.',
    impactScore: 8,
    keyOutcomes: [
      'Controls cover extreme ultraviolet exposure, cleaning, track, and atomic layer deposition.',
      'Tokyo Electron and Nikon adapt export compliance procedures.',
      'Effective date set for July 23, 2023.'
    ]
  },
  {
    date: 'June 30, 2023',
    quarter: 'Q2 2023',
    title: 'Netherlands Publishes National Immersion DUV Restrictions',
    actor: 'Dutch Ministry of Foreign Trade',
    category: 'regulation',
    description: 'Minister Liesje Schreinemacher issues ministerial regulation subjecting advanced deep ultraviolet (DUV) immersion lithography systems to individual export authorization.',
    impactScore: 9,
    keyOutcomes: [
      'ASML Twinscan NXT:2000i and subsequent models require Dutch government export permits.',
      'Massive Chinese pre-order buying spree of unrestricted NXT:1980 series immersion scanners.',
      'ASML China revenue surges above 35% in late 2023 before full enforcement deadline.'
    ]
  },
  {
    date: 'October 17, 2023',
    quarter: 'Q4 2023',
    title: 'BIS Update: Closing Performance Density & Cloud Loopholes',
    actor: 'US Dept of Commerce (BIS)',
    category: 'unilateral',
    description: 'US updates export controls with the "October 2023 Update," introducing Total Processing Performance (TPP) and Performance Density metrics to block modified GPUs like the Nvidia A800 and H800.',
    impactScore: 9,
    keyOutcomes: [
      'Bans A800, H800, L40S, and high-end consumer RTX 4090 GPUs.',
      'Establishes red-flag customer due diligence for cloud data centers in third-party nations.',
      'Expands SME restrictions to prevent tool modification.'
    ]
  },
  {
    date: '2024 & Beyond',
    quarter: '2024 - 2026',
    title: 'Asymmetric Retaliation & The SMIC/Huawei Counter-Offensive',
    actor: 'Beijing & Domestic Champions',
    category: 'backlash',
    description: 'China unleashes asymmetric responses: Gallium, Germanium, and Graphite export licensing controls, while SMIC manufactures 7nm (Kirin 9000s) and 5nm-class processors via multi-patterned immersion DUV.',
    impactScore: 9,
    keyOutcomes: [
      'Western defense and automotive supply chains face mineral vulnerability alerts.',
      'National IC Fund ("Big Fund") Phase III raises record $47.5 Billion.',
      'US presses Netherlands to revoke ASML servicing and maintenance licenses for existing Chinese machines.'
    ]
  }
];

export const ASYMMETRIC_STRATEGIES: AsymmetricStrategy[] = [
  {
    id: 'critical-minerals',
    title: 'Critical Mineral Monopolies',
    subtitle: 'Weaponizing Gallium, Germanium, Graphite, and Heavy Rare Earth Elements.',
    iconName: 'Gem',
    threatLevel: 'Critical',
    westernVulnerabilityScore: 88,
    chineseDominanceScore: 94,
    summary: 'China controls over 80% of global gallium supply, 60% of germanium production, and over 70% of rare earth refining. By imposing strict export licensing regimes, Beijing signaled its ability to throttle Western production of high-performance radar (AESA), electric vehicle inverters, silicon carbide (SiC), gallium nitride (GaN) power semiconductors, and fiber optics.',
    mechanisms: [
      'Export Licensing Permits: Bureaucratic quotas requiring end-user declarations to slow down Western procurement.',
      'Dual-Use Chokepoints: Targeting specialized elements critical for military F-35 radars and naval phased arrays.',
      'Refining Monopoly: While raw ore exists globally, the environmental and chemical refining infrastructure is concentrated in mainland China.'
    ],
    keyMaterialsOrNodes: ['Gallium (Ga)', 'Germanium (Ge)', 'Synthetic & Natural Graphite', 'Dysprosium & Neodymium'],
    westernCountermeasures: [
      'Defense Production Act Title III investments in domestic processing.',
      'Allied recycling facilities in Australia, Canada, and Nordic countries.',
      'Alternative substrate chemistry research (Diamond semiconductors, Silicon-on-Insulator).'
    ]
  },
  {
    id: 'legacy-flooding',
    title: 'Mature-Node (28nm+) Market Saturation',
    subtitle: 'Creating deep structural industrial dependencies in automotive and medical tech.',
    iconName: 'Cpu',
    threatLevel: 'Severe',
    westernVulnerabilityScore: 78,
    chineseDominanceScore: 86,
    summary: 'Blocked from procuring advanced sub-5nm lithography, Chinese industrial policy directed massive capital into expanding mature nodes (28nm, 45nm, 65nm). Domestic firms (SMIC, Hua Hong, Nexchip) have built over 30 new mature fabs. By undercutting global prices by 25-40%, China risks driving Western and Japanese legacy foundries out of business, leaving Western automotive and medical supply chains critically dependent on Beijing.',
    mechanisms: [
      'State-Subsidized Pricing: Fabs operate with government municipal subsidies, allowing below-cost wafer pricing.',
      'Automotive Supply Integration: Dominating microcontrollers (MCUs) and power management ICs (PMICs).',
      'Locking in Western OEMs: US and European automakers seeking cost reductions adopt low-cost Chinese silicon.'
    ],
    keyMaterialsOrNodes: ['28nm High-K Metal Gate', '40nm/55nm Embedded Flash', '65nm/90nm Power Management', '180nm BCD'],
    westernCountermeasures: [
      'Section 301 and EU anti-dumping tariffs on mature-node semiconductor imports.',
      'Trusted Foundry mandates requiring critical infrastructure to source domestically fabricated silicon.',
      'Allied subsidies for European and American mature foundries (GlobalFoundries, Microchip).'
    ]
  },
  {
    id: 'circumvention-networks',
    title: 'Circumvention & Transshipment Networks',
    subtitle: 'Routing high-end accelerators through non-aligned transit hubs and cloud proxies.',
    iconName: 'Network',
    threatLevel: 'High',
    westernVulnerabilityScore: 65,
    chineseDominanceScore: 72,
    summary: 'Despite sweeping BIS export controls, high-end accelerators (Nvidia H100, H800, RTX 4090) continue to enter China through shadowy transshipment networks operating across the Middle East, Southeast Asia (Singapore, Malaysia), and Central Asia. In parallel, Chinese AI entities access Western frontier compute by renting GPU clusters in overseas cloud instances, completely bypassing physical customs.',
    mechanisms: [
      'Shell Entity Transshipment: Creating ephemeral shell companies in Dubai, Singapore, and Hong Kong to purchase US hardware.',
      'Compute-as-a-Service (CaaS) Arbitrage: Renting compute via cloud APIs hosted in Ireland, UAE, or US data centers.',
      'Board-Level Re-soldering: Importing consumer-grade RTX 4090 boards into Shenzhen (Huaqiangbei) and converting them into server blower modules.'
    ],
    keyMaterialsOrNodes: ['Nvidia H100 SXM5', 'H800 / A800 Clusters', 'RTX 4090 Repackaged', 'Remote AWS/Azure/GCP API Keys'],
    westernCountermeasures: [
      'BIS "Know-Your-Customer" (KYC) cloud regulations requiring cloud providers to verify foreign customer identities.',
      'Geofencing and on-chip hardware root-of-trust location attestation.',
      'Expanded entity list sanctions on Southeast Asian intermediaries.'
    ]
  },
  {
    id: 'domestic-substitution',
    title: 'Subsidized Domestic Substitution & Chiplets',
    subtitle: 'The "Big Fund" mobilization, multi-patterning DUV, and 2.5D packaging innovations.',
    iconName: 'ShieldAlert',
    threatLevel: 'Critical',
    westernVulnerabilityScore: 72,
    chineseDominanceScore: 82,
    summary: 'China has mobilized the National Integrated Circuit Industry Investment Fund ("Big Fund") Phase III with $47.5B in direct equity capital. Domestic champion Huawei, paired with SMIC and domestic SME makers (Naura, SMEE, Piotech), is pushing multi-patterning immersion DUV to produce 7nm and 5nm-class chips (Ascend 910B/910C), while relying on advanced chiplet packaging to combine lower-yield silicon dies into high-FLOPS supernodes.',
    mechanisms: [
      'Quadruple Patterning (SAQP): Bypassing EUV absence by exposing wafers multiple times using advanced DUV immersion.',
      'Chiplet & 2.5D Advanced Packaging: Linking multiple smaller silicon dies on silicon interposers to match monolithic GPU die performance.',
      'Software Optimization: Ascend CANN software stack optimizing multi-node parallelization to offset single-chip FLOP deficits.'
    ],
    keyMaterialsOrNodes: ['Huawei Ascend 910B/910C', 'SMIC N+2 / N+3 Logic Nodes', 'Chiplet Interposers', 'Naura Plasma Etchers'],
    westernCountermeasures: [
      'Preventing Dutch and Japanese engineers from servicing previously exported tools in China.',
      'Blacklisting chiplet packaging and advanced EDA design tool providers.',
      'Restricting High-Bandwidth Memory (HBM3/HBM3e) exports from SK Hynix and Samsung.'
    ]
  }
];

export const MIND_MAP_DOMAINS: MindMapDomain[] = [
  {
    id: 'tech-escalation',
    title: '1. Technological Escalation Pathways',
    color: '#06b6d4', // Cyan
    nodes: [
      {
        id: 'cloud-access-controls',
        label: 'Cloud & Data Center Access Controls (KYC Protocol)',
        probability: 92,
        impact: 'High',
        timeframe: '2024 - 2026',
        analysis: 'As physical GPU hardware becomes increasingly difficult to smuggle, regulatory focus shifts upstream to the cloud layer. The US Dept of Commerce mandates strict Know-Your-Customer verification on US hyperscalers (AWS, Azure, Google Cloud) preventing foreign entities from running distributed training jobs on sovereign hardware.',
        keyDrivers: [
          'Remote API training of frontier Chinese LLMs on US infrastructure',
          'Automated compute-as-a-service (CaaS) re-export brokers in neutral jurisdictions',
          'Hardware-level cryptographic attestation and IP geofencing'
        ],
        escalationTriggers: [
          'Detection of state-sponsored PLA models trained on overseas AWS clusters',
          'Enactment of formal US "Cloud KYC" federal statutes'
        ]
      },
      {
        id: 'post-silicon',
        label: 'Post-Silicon R&D & 2D Materials Race',
        probability: 74,
        impact: 'Critical',
        timeframe: '2026 - 2030',
        analysis: 'Recognizing that physical silicon lithography is hitting physical atomic barriers and Western embargo walls, China and Western consortia are racing toward post-silicon substrates—including carbon nanotubes, molybdenum disulfide (MoS2), and graphene-based transistors that bypass EUV requirements.',
        keyDrivers: [
          'Physical limit of silicon sub-1nm gate oxide leakage',
          'Chinese state funding into materials science institutes (CAS)',
          'Allied DARPA and European Horizon quantum/post-silicon initiatives'
        ],
        escalationTriggers: [
          'First commercially viable non-silicon logic wafer demonstrated by a Chinese state lab',
          'Western export controls placed on synthetic 2D materials and carbon nanotube precursors'
        ]
      },
      {
        id: 'algorithmic-efficiency',
        label: 'Algorithmic Efficiency Breakthroughs (1-Bit & Sparse Models)',
        probability: 88,
        impact: 'High',
        timeframe: '2025 - 2027',
        analysis: 'Compute scarcity accelerates algorithmic research into extreme quantization (1-bit LLMs, BitNet), mixture-of-experts (MoE) sparsity, and neuromorphic computing. If intelligence can be trained with 90% fewer FLOPs, hardware export controls lose a substantial portion of their coercive leverage.',
        keyDrivers: [
          'Inability of sanctioned entities to purchase 100k GPU clusters forcing algorithmic ingenuity',
          'DeepSeek, 01.AI, and Qwen architectural efficiency optimizations',
          'Hardware-software co-design tailored for domestic Huawei Ascend architecture'
        ],
        escalationTriggers: [
          'A sanctioned lab trains a frontier-grade model using 10% of standard FLOP budget',
          'Open-source algorithmic pruning renders hardware chokepoints partially ineffective'
        ]
      }
    ]
  },
  {
    id: 'geopolitical-alliances',
    title: '2. Geopolitical Realignment & Alliances',
    color: '#3b82f6', // Blue
    nodes: [
      {
        id: 'chip-4-expansion',
        label: 'Expansion of "Chip 4" Alliances & Sovereign Fabs',
        probability: 95,
        impact: 'High',
        timeframe: '2024 - 2028',
        analysis: 'The informal Chip 4 alliance (US, Taiwan, Japan, South Korea) is institutionalized with binding technology transfer treaties and mutual supply chain guarantees. The US CHIPS Act ($52B) and European Chips Act (€43B) build geographically distributed capacity in Arizona, Ohio, Dresden, and Kumamoto.',
        keyDrivers: [
          'Mitigating catastrophic Taiwan Strait concentration risk',
          'Re-shoring advanced semiconductor fabrication to North America and Europe',
          'Standardizing multinational export control lists'
        ],
        escalationTriggers: [
          'Formalization of a multilateral semiconductor treaty excluding non-democracies',
          'Disputes over US subsidies and intellectual property sharing among allies'
        ]
      },
      {
        id: 'compute-havens',
        label: 'Rise of Neutral "Compute Havens" (Gulf & Nordics)',
        probability: 84,
        impact: 'Critical',
        timeframe: '2025 - 2029',
        analysis: 'Non-aligned nations with vast sovereign capital, cheap abundant energy, and lenient regulatory environments (UAE, Saudi Arabia, Iceland, Norway, Singapore) position themselves as global AI data center hubs, mediating between Western hardware and Eastern capital.',
        keyDrivers: [
          'Abundant cheap power (Gulf solar/gas, Nordic geothermal/hydro)',
          'Sovereign AI agendas (UAE G42/Falcon, Saudi Humain)',
          'Strategic neutrality allowing commercial arbitrage between US and China'
        ],
        escalationTriggers: [
          'US Department of Commerce threatens export bans on Gulf data centers over ties to Chinese entities',
          'Signing of bilateral security pacts tying GPU access to geopolitical alignment'
        ]
      },
      {
        id: 'sino-russian-axis',
        label: 'Deepening Sino-Russian & BRICS+ Tech Axis',
        probability: 82,
        impact: 'High',
        timeframe: '2024 - 2028',
        analysis: 'Cut off from Western silicon, Russia exchanges raw materials, nuclear power technology, and military aerospace intelligence for Chinese semiconductors, drones, and consumer electronic components, forming an alternative technological hemisphere.',
        keyDrivers: [
          'Russian dependence on Chinese consumer and industrial microelectronics',
          'Chinese access to Russian noble gases (Neon, Krypton) and rare earths',
          'BRICS+ discussions on alternative non-SWIFT financial settlement networks'
        ],
        escalationTriggers: [
          'Secondary US sanctions on major Chinese commercial banks over Russian tech transshipments',
          'Joint Sino-Russian sovereign cloud data center deployments'
        ]
      }
    ]
  },
  {
    id: 'economic-fragmentation',
    title: '3. Economic & Market Fragmentation',
    color: '#f59e0b', // Amber
    nodes: [
      {
        id: 'bifurcated-hardware',
        label: 'Bifurcated Hardware & Software Ecosystems',
        probability: 91,
        impact: 'Critical',
        timeframe: '2024 - 2030',
        analysis: 'Thirty years of hyper-optimized global semiconductor supply chains are replaced by two parallel, incompatible technological stacks: a Western stack built on ASML EUV, TSMC 2nm, Nvidia CUDA, and American EDA; and an Eastern stack built on DUV multi-patterning, Huawei Ascend CANN, and open-source RISC-V architectures.',
        keyDrivers: [
          'Irreversible regulatory export barriers making US IP unusable in China',
          'Chinese national directives ("Delete America / Document 79") mandating state enterprise tech replacement',
          'Growth of domestic Chinese compiler, operating system, and EDA stacks'
        ],
        escalationTriggers: [
          'Total ban on sales of Intel, AMD, and Nvidia chips to Chinese government agencies',
          'Incompatibility of enterprise AI models between Western and Chinese clouds'
        ]
      },
      {
        id: 'capital-duplication',
        label: 'Duplication Costs & Extreme Capital Inefficiency',
        probability: 98,
        impact: 'High',
        timeframe: '2024 - 2030',
        analysis: 'Building redundant regional fabs across the US, Europe, Japan, and China will cost over $1.2 Trillion in duplicative capital expenditure by 2030. Wafer fabrication costs outside of Taiwan run 30-50% higher due to labor, construction, and supply chain friction.',
        keyDrivers: [
          'Sovereignty-driven fab construction regardless of commercial unit economics',
          'Subsidies distorting free market supply/demand equilibriums',
          'Severe global shortage of specialized semiconductor fabrication talent'
        ],
        escalationTriggers: [
          'Global semiconductor overcapacity in legacy nodes triggering widespread corporate bankruptcies',
          'Escalating consumer electronics prices due to fragmented production'
        ]
      },
      {
        id: 'splintered-standards',
        label: 'Splintered Foundation Models & Governance Standards',
        probability: 89,
        impact: 'High',
        timeframe: '2025 - 2028',
        analysis: 'Global AI safety and technical standards splinter. The Western bloc implements safety evaluations focused on biosecurity, cyber capabilities, and copyright; the Eastern bloc prioritizes sovereign data sovereignty, state socialist core values, and party narrative alignment.',
        keyDrivers: [
          'Ideological divergence between democratic and autocratic governance models',
          'Competition for standards leadership at the UN, ITU, and ISO bodies',
          'Restricted cross-border transfer of training datasets and synthetic data'
        ],
        escalationTriggers: [
          'Balkanization of international AI governance forums into rival pacts',
          'Criminalization of using Western foundation models in Chinese jurisdictions'
        ]
      }
    ]
  },
  {
    id: 'kinetic-flashpoints',
    title: '4. Flashpoints & Kinetic Risks',
    color: '#f43f5e', // Rose
    nodes: [
      {
        id: 'taiwan-strait',
        label: 'Taiwan Strait TSMC Vulnerability (Single Point of Failure)',
        probability: 45,
        impact: 'Catastrophic',
        timeframe: '2024 - 2030',
        analysis: 'Over 90% of the world’s leading-edge sub-7nm foundry output is located in Taiwan within range of PLA missile systems and naval blockades. A maritime quarantine or kinetic conflict would trigger an immediate global economic depression, estimated by Bloomberg Economics at over $10 Trillion in lost global GDP.',
        keyDrivers: [
          'Taiwan’s "Silicon Shield" serving as both geopolitical deterrent and prime target',
          'Irreplaceable cleanroom facilities at TSMC Fab 18 and Fab 20',
          'Extreme concentration of advanced packaging (CoWoS) on the island'
        ],
        escalationTriggers: [
          'PLA maritime blockade drill transitioning into an active commercial quarantine',
          'Contingency activation of TSMC remote kill-switches (ASML machine bricking)'
        ]
      },
      {
        id: 'subsea-cable-sabotage',
        label: 'Undersea Fiber-Optic Cable & Grid Sabotage',
        probability: 68,
        impact: 'Critical',
        timeframe: '2024 - 2028',
        analysis: 'AI model training and inference rely on high-speed trans-oceanic fiber-optic cable arteries. Asymmetric gray-zone warfare targets undersea cable chokepoints in the South China Sea, Luzon Strait, and Baltic Sea to sever low-latency data replication between data center clusters.',
        keyDrivers: [
          'Extreme geographic concentration of subsea cable landing stations',
          'Vulnerability of civilian telecom infrastructure to submarine anchor dragging and covert operations',
          'High latency disruption causing cloud data center cluster synchronization failures'
        ],
        escalationTriggers: [
          'Coordinated severing of key trans-Pacific fiber trunks during heightened military tensions',
          'Targeted kinetic strikes on electrical substations powering hyperscale data centers'
        ]
      },
      {
        id: 'lithography-espionage',
        label: 'Advanced Lithography Cyber-Espionage & Sabotage',
        probability: 88,
        impact: 'High',
        timeframe: '2024 - 2027',
        analysis: 'Faced with decades of R&D barriers to independently construct an EUV lithography tool, state-backed advanced persistent threat (APT) groups intensify cyber-espionage campaigns against ASML, Zeiss, Trumpf, TSMC, and Tokyo Electron to exfiltrate proprietary machine schematics and optical coating formulas.',
        keyDrivers: [
          'Extreme difficulty of reverse-engineering 13.5nm EUV systems without precise technical schematics',
          'Targeting tier-2 and tier-3 European and Japanese suppliers with weaker cybersecurity',
          'Poaching specialized lithography and optical engineers via covert front companies'
        ],
        escalationTriggers: [
          'High-profile breach exposing core optical coating secrets of ASML High-NA scanners',
          'Western intelligence agencies unmasking extensive state-sponsored intellectual property theft'
        ]
      }
    ]
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'EUV',
    fullName: 'Extreme Ultraviolet Lithography',
    definition: 'A photolithography technology using 13.5nm wavelength light generated by firing CO2 lasers at molten tin droplets 50,000 times per second in a vacuum, creating microscopic circuit patterns smaller than a virus.',
    geopoliticalSignificance: 'Sole monopoly held by ASML (Netherlands). Without EUV, fabricating silicon below 7nm at commercial yields is virtually impossible.',
    keyHolders: 'ASML (Netherlands), Zeiss Optics (Germany), Trumpf (Germany).'
  },
  {
    term: 'DUV',
    fullName: 'Deep Ultraviolet Lithography',
    definition: 'Photolithography using 193nm argon fluoride (ArF) lasers. Advanced "Immersion DUV" passes light through ultra-pure water to achieve higher resolution for mature and multi-patterned 7nm nodes.',
    geopoliticalSignificance: 'The current battleground of export controls. Chinese fabs stockpiled DUV tools to produce the Huawei Mate 60 Kirin 9000s processor via multi-patterning.',
    keyHolders: 'ASML (Netherlands), Nikon (Japan), Canon (Japan).'
  },
  {
    term: 'EDA',
    fullName: 'Electronic Design Automation',
    definition: 'Sophisticated computer-aided engineering software suites required to design, simulate, and verify integrated circuits with tens of billions of transistors.',
    geopoliticalSignificance: 'Over 85% controlled by three US-headquartered firms. Gate-All-Around (GAAFET) EDA licenses are heavily restricted under US export controls.',
    keyHolders: 'Synopsys (US), Cadence Design Systems (US), Siemens EDA (Germany/US).'
  },
  {
    term: 'GAAFET',
    fullName: 'Gate-All-Around Field-Effect Transistor',
    definition: 'Next-generation 3D transistor design where vertically stacked silicon nanosheets are completely surrounded by the gate material, succeeding FinFET at 3nm and 2nm nodes to prevent quantum tunneling leakage.',
    geopoliticalSignificance: 'Explicit technological threshold for Western export bans. Any equipment or EDA tool capable of fabricating GAAFET architecture is prohibited from export to designated entities.',
    keyHolders: 'TSMC, Samsung, Intel.'
  },
  {
    term: 'CoWoS',
    fullName: 'Chip-on-Wafer-on-Substrate',
    definition: 'TSMC proprietary 2.5D advanced packaging technology that mounts high-performance compute dies and High-Bandwidth Memory (HBM) stacks onto a microscopic silicon interposer.',
    geopoliticalSignificance: 'The acute physical bottleneck for Nvidia H100 and B200 output. Packaging capacity, rather than raw wafer fabrication, has dictated global AI hardware delivery lead times.',
    keyHolders: 'TSMC (Taiwan).'
  },
  {
    term: 'HBM',
    fullName: 'High-Bandwidth Memory (HBM3 / HBM3e / HBM4)',
    definition: 'Vertically stacked DRAM memory chips connected via thousands of microscopic Through-Silicon Vias (TSVs), providing ultra-wide multi-terabyte-per-second memory bandwidth essential for LLM inference and training.',
    geopoliticalSignificance: 'Dominated by South Korean and US memory makers. US export controls have increasingly restricted high-speed HBM exports to prevent Chinese supercomputer construction.',
    keyHolders: 'SK Hynix (South Korea), Samsung (South Korea), Micron (US).'
  },
  {
    term: 'SME',
    fullName: 'Semiconductor Manufacturing Equipment',
    definition: 'The ultra-precision machinery required across hundreds of physical steps in wafer fabrication: photolithography, atomic layer etching, chemical vapor deposition, ion implantation, and metrology.',
    geopoliticalSignificance: 'The core focus of the US-Netherlands-Japan Trilateral Export Control alignment of 2023.',
    keyHolders: 'Applied Materials (US), ASML (NL), Tokyo Electron (JP), Lam Research (US), KLA (US).'
  },
  {
    term: 'Fab',
    fullName: 'Semiconductor Fabrication Facility (Foundry)',
    definition: 'An ultra-pure manufacturing plant operating under Class 1 cleanroom standards where raw silicon ingots are sliced into wafers and fabricated into microchips over several months.',
    geopoliticalSignificance: 'Capital costs exceed $15B-$20B per advanced fab. Extreme geographical concentration in Taiwan makes the physical island the ultimate chokepoint.',
    keyHolders: 'TSMC (Taiwan), Samsung Foundry (S. Korea), Intel Foundry (US), SMIC (China).'
  }
];
