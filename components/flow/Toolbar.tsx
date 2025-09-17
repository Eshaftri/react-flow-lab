'use client';
import { useReactFlow } from '@xyflow/react';

export default function Toolbar({ onAdd, onReset }: { onAdd: () => void; onReset: () => void }) {
  const rf = useReactFlow();
  return (
    <div className="absolute top-3 left-3 z-10 flex gap-2">
      <button className="px-3 py-1 rounded bg-black text-white" onClick={onAdd}>Add node</button>
      <button className="px-3 py-1 rounded bg-gray-800 text-white" onClick={() => rf.fitView({ padding: 0.2 })}>
        Fit view
      </button>
      <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={onReset}>Reset</button>
    </div>
  );
}
