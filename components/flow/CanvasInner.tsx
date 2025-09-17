// components/flow/CanvasInner.tsx
'use client';
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  useReactFlow,
  type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useMemo } from 'react';
import { useFlow } from './hooks/useFlow';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import BasicNode from './nodes/BasicNode';
import LabeledEdge from './edges/LabeledEdge';
import { defaultPalette } from './lib/constants';
import type { FlowConfig, PaletteItem, AppNode, AppEdge } from './lib/types';

export default function CanvasInner({ config }: { config?: FlowConfig }) {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode, reset } = useFlow(config);

  // ✅ Node/edge renderer maps (typed)
    const nodeTypes: NodeTypes = useMemo(() => {
    return {
      basic: BasicNode,
      ...(config?.nodeTypes || {}), // ✅ Merge in custom nodes like CircleNode
    };
  }, [config?.nodeTypes]);

  const edgeTypes = useMemo(() => {
  return {
    labeled: LabeledEdge,
    ...(config?.edgeTypes || {}),
  };
}, [config?.edgeTypes]);


  // ✅ Newer API: screenToFlowPosition (and fully typed ReactFlow instance)
  const { screenToFlowPosition } = useReactFlow<AppNode, AppEdge>();

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const raw = e.dataTransfer.getData('application/reactflow');
      if (!raw) return;

      const item = JSON.parse(raw) as PaletteItem;

      // No bounds math needed — pass client coords directly
      const pos = screenToFlowPosition({ x: e.clientX, y: e.clientY });
      addNode(pos, item.label, item.type ?? 'basic');
    },
    [screenToFlowPosition, addNode],
  );

  const fitViewOptions = useMemo(() => ({ padding: 0.2 }), []);
  const bg = config?.background ?? { variant: BackgroundVariant.Dots, gap: 12, size: 1 };

  return (
    <div className="w-screen h-[100dvh]">
      <Toolbar onAdd={() => addNode({ x: 80, y: 80 })} onReset={reset} />
      <Sidebar items={config?.palette ?? defaultPalette} />

      {/* ⬇️ Keep the generics here too so nodes/edges are typed end-to-end */}
      <ReactFlow<AppNode, AppEdge>
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        fitViewOptions={fitViewOptions}
        proOptions={{ hideAttribution: true }}
      >
        <Controls />
        <MiniMap pannable zoomable />
        <Background
          variant={bg.variant}
          gap={bg.gap}
          size={bg.size}
        />
      </ReactFlow>
    </div>
  );
}
