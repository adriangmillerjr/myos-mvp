// lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind classnames intelligently
 * Usage: cn('btn', isActive && 'btn-active')
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
