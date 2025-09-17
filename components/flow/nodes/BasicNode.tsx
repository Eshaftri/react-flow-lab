'use client';
import { memo, useState } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { NodeData } from '../lib/types';

// Using the non-generic NodeProps keeps compatibility with NodeTypes across versions.
// We cast data to our NodeData shape inside the component.
export default memo(function BasicNode({ data }: NodeProps) {
  const d = data as NodeData;
  const [label, setLabel] = useState(d.label);

  return (
    <div className="rounded-2xl border shadow p-3 bg-white min-w-40">
      <div className="text-xs text-gray-500 mb-1">Basic Node</div>
      <input
        className="w-full outline-none bg-transparent font-medium"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onBlur={() => (d.label = label)}
        aria-label="Node label"
      />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
});
