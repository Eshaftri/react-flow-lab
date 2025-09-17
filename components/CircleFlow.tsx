// components/CircleFlow.tsx
"use client";

import { BackgroundVariant } from "@xyflow/react";
import FlowCanvas from "@/components/flow/FlowCanvas";
import { AppNode } from "./flow/lib/types";
import CircleNode from '@/components/flow/nodes/CircleNode';


export default function CircleFlowPage() {
  const nodes: AppNode[] = [
    {
      id: "circle-1",
      type: "circle",
      position: { x: 100, y: 80 },
      data: { label: "HR", value: 20 },
    },
    {
      id: "circle-2",
      type: "circle",
      position: { x: 300, y: 80 },
      data: { label: "IT", value: 70 },
    },
    {
      id: "circle-3",
      type: "circle",
      position: { x: 500, y: 80 },
      data: { label: "Finance", value: 120 },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "circle-1",
      target: "circle-2",
      data: { label: "handoff" },
    },
    {
      id: "e2-3",
      source: "circle-2",
      target: "circle-3",
      data: { label: "sync" },
    },
  ];

  return (
    <FlowCanvas
      config={{
        storageKey: "circle-flow",
        background: { variant: BackgroundVariant.Dots, gap: 12, size: 1 },
        nodeTypes: {
          circle: CircleNode,
        },
        palette: [
          { label: "Circle Node", type: "circle", data: { value: 30 } },
        ],
        initial: {
          nodes,
          edges,
        },
      }}
    />
  );
}
