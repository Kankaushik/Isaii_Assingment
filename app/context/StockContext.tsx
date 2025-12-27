import React, { createContext, ReactNode, useContext, useState } from "react";

type StockItem = {
  id: string;
  name: string;
  quantity: number;
};

type StockContextType = {
  stock: StockItem[];
  reduceStock: (itemName: string, qty: number) => void;
};

const StockContext = createContext<StockContextType | undefined>(undefined);

export function StockProvider({ children }: { children: ReactNode }) {
  const [stock, setStock] = useState<StockItem[]>([
    { id: "1", name: "Pen", quantity: 100 },
    { id: "2", name: "Notebook", quantity: 50 },
  ]);

  const reduceStock = (itemName: string, qty: number) => {
    setStock((prev) =>
      prev.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity - qty }
          : item
      )
    );
  };

  return (
    <StockContext.Provider value={{ stock, reduceStock }}>
      {children}
    </StockContext.Provider>
  );
}

export function useStock() {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStock must be used within StockProvider");
  }
  return context;
}
