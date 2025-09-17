// components/flow/FlowCanvas.tsx
'use client';
import { ReactFlowProvider } from '@xyflow/react';
import CanvasInner from './CanvasInner';
import type { FlowConfig } from './lib/types';

export default function FlowCanvas({ config }: { config?: FlowConfig }) {
  return (
    <ReactFlowProvider>
      <CanvasInner config={config} />
    </ReactFlowProvider>
  );
}
