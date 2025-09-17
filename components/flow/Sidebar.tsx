'use client';
import type { PaletteItem } from './lib/types';

export default function Sidebar({ items }: { items: PaletteItem[] }) {
  const onDragStart = (e: React.DragEvent, item: PaletteItem) => {
    e.dataTransfer.setData('application/reactflow', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="absolute top-0 right-0 h-full w-52 border-l bg-white/90 z-10 p-3 flex flex-col gap-2">
      <div className="text-sm font-semibold mb-2">Palette</div>
      {items.map((item) => (
        <div
          key={`${item.type ?? 'basic'}-${item.label}`}
          draggable
          onDragStart={(e) => onDragStart(e, item)}
          className="cursor-grab active:cursor-grabbing rounded border px-3 py-2 shadow-sm bg-white"
        >
          {item.label}
        </div>
      ))}
      <p className="text-xs mt-2 text-gray-500">Drag into canvas to create a node.</p>
    </aside>
  );
}
