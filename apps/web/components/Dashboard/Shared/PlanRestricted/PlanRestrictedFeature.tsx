'use client'

import React from 'react'

interface PlanRestrictedFeatureProps {
  children: React.ReactNode
  [key: string]: any
}

/**
 * All features are unlocked — always renders children.
 */
const PlanRestrictedFeature: React.FC<PlanRestrictedFeatureProps> = ({ children }) => {
  return <>{children}</>
}

export default PlanRestrictedFeature
