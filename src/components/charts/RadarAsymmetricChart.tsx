import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  registerables,
  ChartOptions
} from 'chart.js';

ChartJS.register(...registerables);

interface RadarAsymmetricChartProps {
  onSelectAxis?: (axisName: string) => void;
}

export const RadarAsymmetricChart: React.FC<RadarAsymmetricChartProps> = ({ onSelectAxis }) => {
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
      'Advanced Lithography (EUV/DUV)',
      'Critical Raw Materials (Ga/Ge/RE)',
      'Mature Node Silicon (28nm+)',
      'AI Software & CUDA Ecosystem',
      'Advanced Packaging (CoWoS/Chiplets)'
    ];

    const data = {
      labels,
      datasets: [
        {
          label: 'Western Hardware Chokepoint Leverage',
          data: [98, 22, 42, 95, 88],
          backgroundColor: 'rgba(6, 182, 212, 0.22)', // Cyan fill
          borderColor: '#06b6d4',
          borderWidth: 2,
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#ffffff',
          pointHoverRadius: 6,
          pointRadius: 4,
        },
        {
          label: 'Chinese Asymmetric Counter-Leverage',
          data: [18, 94, 86, 38, 62],
          backgroundColor: 'rgba(244, 63, 94, 0.22)', // Rose fill
          borderColor: '#f43f5e',
          borderWidth: 2,
          pointBackgroundColor: '#f43f5e',
          pointBorderColor: '#ffffff',
          pointHoverRadius: 6,
          pointRadius: 4,
        }
      ]
    };

    const options: ChartOptions<'radar'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#cbd5e1',
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11,
              weight: 'bold'
            },
            boxWidth: 12,
            boxHeight: 12,
            padding: 14,
            usePointStyle: true
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
            size: 12,
            weight: 'bold'
          },
          bodyFont: {
            family: "'JetBrains Mono', monospace",
            size: 11
          },
          callbacks: {
            label: (context) => {
              const score = context.raw as number;
              return ` ${context.dataset.label}: ${score}/100 Index`;
            }
          }
        }
      },
      scales: {
        r: {
          angleLines: {
            color: 'rgba(51, 65, 85, 0.6)'
          },
          grid: {
            color: 'rgba(51, 65, 85, 0.4)'
          },
          pointLabels: {
            color: '#e2e8f0',
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11,
              weight: 'bold'
            }
          },
          ticks: {
            display: true,
            stepSize: 20,
            color: '#64748b',
            backdropColor: 'transparent',
            font: {
              family: "'JetBrains Mono', monospace",
              size: 9
            }
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      onClick: (_event, elements) => {
        if (elements.length > 0 && onSelectAxis) {
          const index = elements[0].index;
          onSelectAxis(labels[index]);
        }
      }
    };

    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'radar',
      data,
      options
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [onSelectAxis]);

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
};
