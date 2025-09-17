import type { Node, Edge } from '@xyflow/react';
import type { ComponentType } from 'react';

export type NodeData = {
  label: string;
  value?: number; // Optional: used in department nodes
};

// Add all your supported node types here:
export type NodeType = 'basic' | 'department' | 'aiTask' | 'decision' | 'circle' | 'square';

// Use NodeType union instead of just 'basic'
export type AppNode = Node<NodeData, NodeType>;

export type AppEdge = Edge<{ label?: string }>;

export type PersistedState = {
  nodes: AppNode[];
  edges: AppEdge[];
};

// For side panel items (drag-and-drop)
export type PaletteItem = {
  label: string;
  type?: NodeType; // ✅ Use NodeType for type safety and autocomplete
  data?: Partial<NodeData>;
};

export type FlowConfig = {
  initial?: {
    nodes: AppNode[];
    edges: AppEdge[];
  };
  nodeTypes?: Partial<Record<NodeType, ComponentType<any>>>;
  edgeTypes?: Partial<Record<string, ComponentType<any>>>;
  palette?: PaletteItem[];
  background?: { variant?: any; gap?: number; size?: number }; // BackgroundVariant typed at usage site
  storageKey?: string | null; // null/undefined = no persistence
};