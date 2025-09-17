'use client';

import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

type CircleNodeData = {
  label: string;
  value?: number;
};

function getRingColor(value?: number) {
  if (value === undefined) return 'border-gray-400';
  if (value > 100) return 'border-red-500';
  if (value > 50) return 'border-yellow-500';
  return 'border-green-500';
}

const CircleNode = memo(({ data }: NodeProps) => {
  const d = data as CircleNodeData;
  const ring = getRingColor(d.value);

  return (
    <div className="flex flex-col items-center relative">
      {/* Circle Ring */}
      <div
        className={`w-16 h-16 rounded-full border-4 ${ring} bg-white flex items-center justify-center text-sm font-bold text-gray-700 shadow-md`}
      >
        {d.value}
        <Handle type="target" position={Position.Left} className="-top-1" />
        <Handle type="source" position={Position.Right} className="-bottom-1" />
      </div>

      {/* Label under circle */}
      <div className="mt-1 text-xs text-center px-1 font-medium text-gray-800">
        {d.label}
      </div>
    </div>
  );
});

export default CircleNode;
