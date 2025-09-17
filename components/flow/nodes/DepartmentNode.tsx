'use client';
import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

type DepartmentNodeData = {
  label: string;
  value: number;
};

export default memo(function DepartmentNode({ data }: NodeProps) {
  const d = data as DepartmentNodeData;

  const ringColor = d.value >= 20 ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600';

  return (
    <div className="relative w-36 text-center">
      <div
        className={`mx-auto w-12 h-12 rounded-full border-4 font-bold flex items-center justify-center text-sm ${ringColor}`}
      >
        {d.value}
      </div>
      <div className="mt-1 bg-white text-xs font-medium border rounded shadow px-1 py-0.5 inline-block">
        {d.label}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});
