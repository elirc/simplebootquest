export function downtimeAllowed(slo: number, days: number): number { return 0; }
export function budgetReport(slo: number, total: number, failed: number) { return { availability: 100, budgetUsed: 0, remaining: 0 }; }
export function burnRate(slo: number, windowTotal: number, windowFailed: number): number { return 0; }
