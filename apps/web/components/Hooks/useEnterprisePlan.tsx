/**
 * All features are unlocked — always returns enterprise.
 */
function useEnterprisePlan() {
  return {
    plan: 'enterprise' as const,
    isEnterprise: true,
  }
}

export default useEnterprisePlan
