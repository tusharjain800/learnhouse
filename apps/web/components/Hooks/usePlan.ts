'use client'
import type { PlanLevel } from '@services/plans/plans'

/**
 * All features are unlocked — always returns 'enterprise'.
 */
export function usePlan(): PlanLevel {
  return 'enterprise'
}
