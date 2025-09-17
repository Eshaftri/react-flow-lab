// components/flow/lib/constants.ts
import type { AppNode, AppEdge, PaletteItem } from './types';

export const defaultNodes: AppNode[] = [
  { id: 'n1', position: { x: 40, y: 40 }, data: { label: 'Node 1' }, type: 'basic' },
  { id: 'n2', position: { x: 280, y: 160 }, data: { label: 'Node 2' }, type: 'basic' },
];

export const defaultEdges: AppEdge[] = [
  { id: 'e-n1-n2', source: 'n1', target: 'n2', type: 'labeled', data: { label: 'hello' } },
];

export const defaultPalette: PaletteItem[] = [
  { label: 'Task', type: 'basic' },
  { label: 'Service', type: 'basic' },
  { label: 'Decision', type: 'basic' },
];
