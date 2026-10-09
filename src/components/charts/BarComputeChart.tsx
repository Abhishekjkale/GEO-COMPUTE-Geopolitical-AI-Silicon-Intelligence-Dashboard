import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  registerables,
  ChartOptions
} from 'chart.js';

ChartJS.register(...registerables);

interface BarComputeChartProps {
  onSelectBloc?: (bloc: string) => void;
}

export const BarComputeChart: React.FC<BarComputeChartProps> = ({ onSelectBloc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const labels = [
      'US & Allied Hyperscalers',
      'China Tech Ecosystem',
      'Gulf Sovereign Hubs',
      'European Sovereign',
      'Global South (All)'
    ];

    const data = {
      labels,
      datasets: [
        {
          label: 'Frontier AI Training Compute (PFLOPS)',
          data: [68400, 19200, 4200, 2800, 1150],
          backgroundColor: [
            'rgba(6, 182, 212, 0.8)',   // Cyan
            'rgba(245, 158, 11, 0.8)',  // Amber
            'rgba(168, 85, 247, 0.8)',  // Purple
            'rgba(59, 130, 246, 0.8)',   // Blue
            'rgba(148, 163, 184, 0.6)'  // Slate
          ],
          borderColor: [
            '#06b6d4',
            '#f59e0b',
            '#a855f7',
            '#3b82f6',
            '#64748b'
          ],
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.65,
        }
      ]
    };

    const options: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y', // horizontal bar chart for high readability
      plugins: {
        legend: {
          display: false
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
              return ` Aggregate: ${val.toLocaleString()} PetaFLOPs`;
            },
            afterLabel: (context) => {
              if (context.dataIndex === 0) return 'Key operators: Microsoft/OpenAI, Google TPU/GPU, Meta, AWS, Anthropic';
              if (context.dataIndex === 1) return 'Key operators: ByteDance, Alibaba Cloud, Tencent, Huawei Ascend clusters';
              if (context.dataIndex === 2) return 'Key operators: UAE G42/Falcon, Saudi Humain/SCAI sovereign hubs';
              if (context.dataIndex === 3) return 'Key operators: Mistral AI clusters, EuroHPC supercomputers (LUMI, Leonardo)';
              return 'Sub-Saharan Africa, Latin America, SE Asia (excl. Singapore)';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(51, 65, 85, 0.4)',
          },
          ticks: {
            color: '#94a3b8',
            font: {
              family: "'JetBrains Mono', monospace",
              size: 10
            },
            callback: (value) => `${Number(value) / 1000}k PF`
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: '#e2e8f0',
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11,
              weight: 'bold'
            }
          }
        }
      },
      onClick: (_event, elements) => {
        if (elements.length > 0 && onSelectBloc) {
          const index = elements[0].index;
          onSelectBloc(labels[index]);
        }
      }
    };

    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'bar',
      data,
      options
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [onSelectBloc]);

  return (
    <div className="relative w-full h-[280px]">
      <canvas ref={canvasRef} />
    </div>
  );
};
