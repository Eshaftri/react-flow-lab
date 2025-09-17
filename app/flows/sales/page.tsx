// app/flows/sales/page.tsx
'use client';
import FlowCanvas from '@/components/flow/FlowCanvas';
import { BackgroundVariant } from '@xyflow/react';

export default function SalesFlowPage() {
  return (
    <FlowCanvas
      config={{
        storageKey: 'sales-flow',
        background: { variant: BackgroundVariant.Dots, gap: 12, size: 1 },
        palette: [
          { label: 'Lead', type: 'basic' },
          { label: 'Opportunity', type: 'basic' },
          { label: 'Contract', type: 'basic' },
        ],
      }}
    />
  );
}
