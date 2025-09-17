'use client';

import FlowCanvas from '@/components/flow/FlowCanvas';
import { BackgroundVariant } from '@xyflow/react';
import type { AppNode } from '@/components/flow/lib/types';


const nodes: AppNode[] = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Management', value: 8 }, type: 'department' },
  { id: 'n2', position: { x: 160, y: 0 }, data: { label: 'Legal and Compliance', value: 8 }, type: 'department' },
  { id: 'n3', position: { x: 320, y: 0 }, data: { label: 'Marketing', value: 8 }, type: 'department' },
  { id: 'n4', position: { x: 480, y: 0 }, data: { label: 'Finance and Accounting', value: 10 }, type: 'department' },
  { id: 'n5', position: { x: 640, y: 0 }, data: { label: 'Sales', value: 10 }, type: 'department' },
  { id: 'n6', position: { x: 800, y: 0 }, data: { label: 'HR', value: 10 }, type: 'department' },
  { id: 'n7', position: { x: 960, y: 0 }, data: { label: 'Customer Support', value: 14 }, type: 'department' },
  { id: 'n8', position: { x: 1120, y: 0 }, data: { label: 'Research', value: 16 }, type: 'department' },
  { id: 'n9', position: { x: 1280, y: 0 }, data: { label: 'Development', value: 16 }, type: 'department' },
  { id: 'n10', position: { x: 0, y: 160 }, data: { label: 'Supplier Management', value: 20 }, type: 'department' },
  { id: 'n11', position: { x: 160, y: 160 }, data: { label: 'Inventory Management', value: 32 }, type: 'department' },
  { id: 'n12', position: { x: 320, y: 160 }, data: { label: 'Distribution', value: 32 }, type: 'department' },
  { id: 'n13', position: { x: 480, y: 160 }, data: { label: 'Retail and Store Operations', value: 76 }, type: 'department' },
  { id: 'n14', position: { x: 640, y: 160 }, data: { label: 'Production', value: 52 }, type: 'department' },
  { id: 'n15', position: { x: 800, y: 160 }, data: { label: 'Logistics', value: 60 }, type: 'department' },
  { id: 'n16', position: { x: 0, y: 320 }, data: { label: 'IT', value: 104 }, type: 'department' },
  { id: 'n17', position: { x: 480, y: 320 }, data: { label: 'Store', value: 33008 }, type: 'department' },
  { id: 'n18', position: { x: 800, y: 320 }, data: { label: 'Procurement', value: 20 }, type: 'department' },
];

export default function DepartmentFlow() {
  return (
    <FlowCanvas
      config={{
        storageKey: 'department-flow',
        background: { variant: BackgroundVariant.Dots, gap: 12, size: 1 },
        palette: [],
        initial: {
          nodes,
          edges: [],
        },
      }}
    />
  );
}
