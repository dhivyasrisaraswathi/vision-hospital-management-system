import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...', fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        <Loader className="w-12 h-12 text-medical-600 animate-spin" />
      </div>
      <p className="text-gray-600 font-semibold">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  );
};

interface RefreshCounterProps {
  interval?: number;
}

export const RefreshCounter: React.FC<RefreshCounterProps> = ({ interval = 5 }) => {
  const [count, setCount] = useState(interval);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev <= 1 ? interval : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="text-sm text-gray-500 flex items-center gap-2">
      <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
      Auto-refresh in {count}s
    </div>
  );
};
