'use client';

import { useCallback, useEffect, useMemo } from 'react';
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type OnConnect,
} from '@xyflow/react';
import { defaultEdges, defaultNodes } from '../lib/constants';
import { loadState, saveState, clearState } from '../lib/storage';
import type { AppEdge, AppNode, FlowConfig, NodeType } from '../lib/types';

export function useFlow(config?: FlowConfig) {
  const storageKey = config?.storageKey ?? null;

  // initial state: prefer persisted → config.initial → defaults
  const persisted = useMemo(() => loadState(storageKey), [storageKey]);
  const baseNodes = persisted?.nodes ?? config?.initial?.nodes ?? defaultNodes;
  const baseEdges = persisted?.edges ?? config?.initial?.edges ?? defaultEdges;

  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(baseNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<AppEdge>(baseEdges);

  // persist on change
  useEffect(() => {
    saveState(storageKey, { nodes, edges });
  }, [storageKey, nodes, edges]);

  const onConnect: OnConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge({ ...params, type: 'labeled', data: { label: 'link' } }, eds)),
    [setEdges],
  );

const addNode = useCallback(
  (
    pos: { x: number; y: number },
    label = 'New Node',
    type: NodeType = 'basic',
  ) => {
    const newNode: AppNode = {
      id: `n-${crypto.randomUUID().slice(0, 8)}`,
      position: pos,
      data: { label },
      type,
    };

    setNodes((nds) => [...nds, newNode]);
  },
  [setNodes],
);


  const reset = useCallback(() => {
    const resetNodes = config?.initial?.nodes ?? defaultNodes;
    const resetEdges = config?.initial?.edges ?? defaultEdges;
    setNodes(resetNodes);
    setEdges(resetEdges);
    clearState(storageKey);
  }, [setNodes, setEdges, storageKey, config?.initial]);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    reset,
  };
}
