'use client'
import React from 'react'

export function AdvancedGate({
  children,
}: {
  isAdvanced?: boolean
  currentPlan?: string
  children: React.ReactNode
}) {
  return <>{children}</>
}
