'use client';
import FlowCanvas from '@/components/flow/FlowCanvas';
import { BackgroundVariant } from '@xyflow/react';

export default function SalesFlowPage() {
  return (
    <FlowCanvas
      config={{
        storageKey: 'sales-flow',          // persists this page's flow
        background: { variant: BackgroundVariant.Dots, gap: 12, size: 1 },
        palette: [
          { label: 'Lead', type: 'basic' },
          { label: 'Opportunity', type: 'basic' },
          { label: 'Contract', type: 'basic' },
        ],
        // initial: { nodes: [...], edges: [...] }, // optionally override defaults
      }}
    />
  );
}
