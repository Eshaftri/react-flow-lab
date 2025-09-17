'use client';
import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

type SquareNodeData = {
  label: string;
  value?: number;
};

function getBorderColor(value?: number) {
  if (value === undefined) return 'border-gray-400';
  if (value > 100) return 'border-red-500';
  if (value > 50) return 'border-yellow-500';
  return 'border-green-500';
}

const SquareNode = memo(({ data }: NodeProps) => {
  const d = data as SquareNodeData;
  const border = getBorderColor(d.value);

  return (
    <div className="flex flex-col items-center">
      {/* Square box */}
      <div
        className={`w-28 h-28 rounded-md border-4 ${border} bg-white relative shadow-md`}
      >
        {/* Left input */}
        <Handle type="target" position={Position.Left} className="-left-1" />
        {/* Right output */}
        <Handle type="source" position={Position.Right} className="-right-1" />
      </div>

      {/* Label below */}
      <div className="mt-1 text-sm font-medium text-gray-800 text-center">
        {d.label}
      </div>
    </div>
  );
});

export default SquareNode;
