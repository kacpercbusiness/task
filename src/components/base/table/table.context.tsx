import { createContext, useContext } from "react";

type TableContextType = {
  onRowClick?: (item: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const TableContext = createContext<TableContextType | null>(null);

export const TableProvider = <T,>({ onRowClick, children }: { onRowClick?: (item: T) => void; children: React.ReactNode }) => {

  return (
    <TableContext.Provider value={{ onRowClick }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
    const context = useContext(TableContext);

    if(!context) {
        throw new Error('useTableContext must be used within a TableProvider');
    }

    return context;
};