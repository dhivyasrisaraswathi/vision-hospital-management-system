import React from 'react';

// CSS-based chart components
// These are simple visualizations using HTML, CSS, and SVG
// No external charting library dependencies needed

interface SimpleBarChartProps {
  data: { name: string; value: number }[];
  maxValue?: number;
}

export const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ data, maxValue = 100 }) => {
  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold">{item.name}</span>
            <span className="text-sm font-bold text-teal-600">{item.value}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full"
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface SimpleLineChartProps {
  data: { time: string; value: number }[];
}

export const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end justify-around h-64 gap-2">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div
            className="w-8 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t hover:from-teal-700 hover:to-teal-500 transition"
            style={{ height: `${(item.value / maxValue) * 200}px` }}
            title={`${item.time}: ${item.value}`}
          ></div>
          <span className="text-xs text-gray-600">{item.time}</span>
        </div>
      ))}
    </div>
  );
};

interface SimplePieChartProps {
  data: { name: string; value: number }[];
  colors?: string[];
}

export const SimplePieChart: React.FC<SimplePieChartProps> = ({ 
  data, 
  colors = ['#ef4444', '#eab308', '#a855f7', '#22c55e', '#3b82f6'] 
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;

  return (
    <div>
      <div className="flex justify-center mb-4">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {data.map((item, idx) => {
            const percentage = (item.value / total) * 100;
            const dashArray = (percentage * 3.6) / 100 * 360;
            const strokeDashoffset = -offset * 3.6;
            offset += item.value;

            return (
              <circle
                key={idx}
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke={colors[idx % colors.length]}
                strokeWidth="25"
                strokeDasharray={`${dashArray} 360`}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 90 90)"
              />
            );
          })}
        </svg>
      </div>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={item.name} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: colors[idx % colors.length] }}
            ></div>
            <span className="text-gray-700">{item.name}</span>
            <span className="ml-auto font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

