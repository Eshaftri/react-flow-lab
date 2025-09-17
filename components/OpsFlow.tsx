'use client';
import FlowCanvas from '@/components/flow/FlowCanvas';
import { BackgroundVariant } from '@xyflow/react';

export default function OpsFlowPage() {
  return (
    <FlowCanvas
      config={{
        storageKey: 'ops-flow',            // a different saved state
        background: { variant: BackgroundVariant.Cross, gap: 16, size: 1 },
        palette: [
          { label: 'Service', type: 'basic' },
          { label: 'Policy Gate', type: 'basic' },
          { label: 'AI Task', type: 'basic' },
        ],
      }}
    />
  );
}
