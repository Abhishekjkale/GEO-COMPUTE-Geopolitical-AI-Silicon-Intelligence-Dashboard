import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  registerables,
  ChartOptions
} from 'chart.js';

ChartJS.register(...registerables);

interface DoughnutChartProps {
  onSelectRegion?: (region: string) => void;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ onSelectRegion }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const data = {
      labels: [
        'Taiwan (TSMC - 90%)',
        'South Korea (Samsung - 8%)',
        'United States (Intel / TSMC AZ - 1%)',
        'China (SMIC multi-patterned - 1%)',
        'Europe (0% Leading-edge)'
      ],
      datasets: [
        {
          label: 'Leading-Edge Fabrication Share',
          data: [90, 8, 1, 1, 0.2],
          backgroundColor: [
            'rgba(244, 63, 94, 0.85)',   // Rose (Taiwan flashpoint)
            'rgba(59, 130, 246, 0.85)',   // Blue (South Korea)
            'rgba(6, 182, 212, 0.85)',    // Cyan (United States)
            'rgba(245, 158, 11, 0.85)',   // Amber (China)
            'rgba(148, 163, 184, 0.5)'    // Slate (Europe)
          ],
          borderColor: [
            '#f43f5e',
            '#3b82f6',
            '#06b6d4',
            '#f59e0b',
            '#64748b'
          ],
          borderWidth: 1.5,
          hoverOffset: 8,
          spacing: 2
        }
      ]
    };

    const options: ChartOptions<'doughnut'> = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#94a3b8',
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11
            },
            boxWidth: 12,
            boxHeight: 12,
            padding: 14,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: '#334155',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          titleFont: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 13,
            weight: 'bold'
          },
          bodyFont: {
            family: "'JetBrains Mono', monospace",
            size: 12
          },
          callbacks: {
            label: (context) => {
              const val = context.raw as number;
              return ` Capacity: ${val >= 1 ? val + '%' : '<1%'} leading-edge (<7nm)`;
            },
            afterLabel: (context) => {
              if (context.dataIndex === 0) return 'Primary fabs: Fab 18 (Tainan), Fab 12 (Hsinchu)';
              if (context.dataIndex === 1) return 'Primary fabs: Hwaseong, Pyeongtaek Campus';
              if (context.dataIndex === 2) return 'Primary fabs: Intel Fab 52/62 (Chandler), TSMC Fab 21';
              if (context.dataIndex === 3) return 'SMIC SMNC Fab (Shanghai) DUV quad-patterning';
              return 'Europe has zero commercial sub-7nm foundries.';
            }
          }
        }
      },
      onClick: (_event, elements) => {
        if (elements.length > 0 && onSelectRegion) {
          const index = elements[0].index;
          const label = data.labels[index];
          onSelectRegion(label);
        }
      }
    };

    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'doughnut',
      data,
      options
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [onSelectRegion]);

  return (
    <div className="relative w-full h-[280px] flex items-center justify-center">
      <canvas ref={canvasRef} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
        <span className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">90%+</span>
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Taiwan TSMC</span>
      </div>
    </div>
  );
};
