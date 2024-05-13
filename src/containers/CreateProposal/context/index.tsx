"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Typings
type ProposalContext = {
  text: string | null;
  setText: (text: string | null) => any;
};

// Context
const ProposalContext = createContext<ProposalContext>({
  text: null,
  setText: () => {},
});

// Provider
const ProposalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // States
  const [text, setText] = useState<string | null>(null);

  // Functions
  const updateText = (newText: string | null) => {
    setText(newText);
  };

  return (
    <ProposalContext.Provider value={{ setText: updateText, text }}>
      {children}
    </ProposalContext.Provider>
  );
};

// Hooks
export const useProposalContext = () => {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default ProposalContextProvider;
