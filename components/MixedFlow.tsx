'use client';

import { BackgroundVariant } from '@xyflow/react';
import FlowCanvas from '@/components/flow/FlowCanvas';
import CircleNode from '@/components/flow/nodes/CircleNode';
import SquareNode from '@/components/flow/nodes/SquareNode';
import { AppNode } from './flow/lib/types';

export default function MixedFlow() {
  const nodes: AppNode[] = [
    {
      id: 'node-1',
      type: 'circle',
      position: { x: 100, y: 200 },
      data: { label: 'HR', value: 30 },
    },
    {
      id: 'node-2',
      type: 'square',
      position: { x: 300, y: 200 },
      data: { label: 'IT', value: 70 },
    },
    {
      id: 'node-3',
      type: 'circle',
      position: { x: 500, y: 200 },
      data: { label: 'Finance', value: 110 },
    },
    {
      id: 'node-4',
      type: 'square',
      position: { x: 700, y: 200 },
      data: { label: 'Compliance', value: 40 },
    },
  ];

  const edges = [
    { id: 'e1-2', source: 'node-1', target: 'node-2' },
    { id: 'e2-3', source: 'node-2', target: 'node-3' },
    { id: 'e3-4', source: 'node-3', target: 'node-4' },
  ];

  return (
    <FlowCanvas
      config={{
        storageKey: 'mixed-flow',
        background: { variant: BackgroundVariant.Dots, gap: 12, size: 1 },
        nodeTypes: {
          circle: CircleNode,
          square: SquareNode,
        },
        palette: [
          { label: 'Circle Node', type: 'circle', data: { value: 30 } },
          { label: 'Square Node', type: 'square', data: { value: 60 } },
        ],
        initial: {
          nodes,
          edges,
        },
      }}
    />
  );
}
