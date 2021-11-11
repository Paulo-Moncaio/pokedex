import { createContext, ReactNode, useEffect, useState } from "react";

interface SelectedTypeProps {
  children: ReactNode;
}

export const SelectedTypeContext = createContext<String>('');

export function SelectedTypeProvider({ children } : SelectedTypeProps) {
  const [selectedType, setSelectedType] = useState<String>('')

  return (
    <SelectedTypeContext.Provider value={selectedType}>
      {children}
    </SelectedTypeContext.Provider>
  )
}