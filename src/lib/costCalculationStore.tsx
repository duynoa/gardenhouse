import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface CostCalculation {
  style: string;
  area: number;
  price: number;
  addons: string[];
}

interface CostCalculationContextValue {
  costCalculation: CostCalculation | null;
  setCostCalculation: (calc: CostCalculation) => void;
  clearCostCalculation: () => void;
}

const CostCalculationContext = createContext<CostCalculationContextValue | undefined>(undefined);

export function CostCalculationProvider({ children }: { children: ReactNode }) {
  const [costCalculation, setCostCalculationState] = useState<CostCalculation | null>(null);

  const setCostCalculation = useCallback((calc: CostCalculation) => {
    setCostCalculationState(calc);
  }, []);

  const clearCostCalculation = useCallback(() => {
    setCostCalculationState(null);
  }, []);

  return (
    <CostCalculationContext.Provider value={{ costCalculation, setCostCalculation, clearCostCalculation }}>
      {children}
    </CostCalculationContext.Provider>
  );
}

export function useCostCalculation() {
  const ctx = useContext(CostCalculationContext);
  if (!ctx) {
    throw new Error('useCostCalculation must be used within CostCalculationProvider');
  }
  return ctx;
}
