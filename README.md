# React Flow – Mixed Shape Diagram

This project uses [`@xyflow/react`](https://reactflow.dev) to create interactive node diagrams with **custom shapes** like circles and squares.

## Features

- Circle and Square nodes
- Border color based on value
- Labels under nodes
- Left-to-right edge handles
- Drag & drop palette
- Reusable `FlowCanvas` and modular structure

## Folder Structure

```
app/
└── flows/
    ├── mixed/               # This flow shows both Circle and Square nodes
    ├── circle/
    └── square/
components/
└── flow/
    ├── nodes/               # CircleNode.tsx, SquareNode.tsx
    ├── FlowCanvas.tsx
    ├── CanvasInner.tsx
    ├── Sidebar.tsx
    └── Toolbar.tsx
```

## Run the App

```bash
npm install
npm run dev
```

Open in browser:  
👉 `http://localhost:3000/flows/mixed`
👉 `http://localhost:3000/flows/circle`
👉 `http://localhost:3000/flows/square`


## Add New Node Types

1. Create a new node component in `components/flow/nodes`
2. Add its type to `NodeType` in `lib/types.ts`
3. Register it in the flow config under `nodeTypes`

