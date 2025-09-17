'use client';
import type { PersistedState } from './types';

const KEY = (k: string) => `xyflow:${k}`;

export function loadState(storageKey?: string | null): PersistedState | null {
  if (!storageKey || typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY(storageKey));
    return raw ? (JSON.parse(raw) as PersistedState) : null;
  } catch {
    return null;
  }
}

export function saveState(storageKey?: string | null, state?: PersistedState) {
  if (!storageKey || typeof window === 'undefined' || !state) return;
  localStorage.setItem(KEY(storageKey), JSON.stringify(state));
}

export function clearState(storageKey?: string | null) {
  if (!storageKey || typeof window === 'undefined') return;
  localStorage.removeItem(KEY(storageKey));
}
