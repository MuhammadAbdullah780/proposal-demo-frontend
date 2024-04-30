"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ProposalContext = {
  text: string | null;
  setText: (text: string | null) => any;
};

const ProposalContext = createContext<ProposalContext>({
  text: null,
  setText: () => {},
});

const ProposalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [text, setText] = useState<string | null>(null);

  const updateText = (newText: string | null) => {
    setText(newText);
  };

  useEffect(() => {
    console.log(text, "TEXT____");
  }, [text]);

  return (
    <ProposalContext.Provider value={{ setText: updateText, text }}>
      {children}
    </ProposalContext.Provider>
  );
};

export const useProposalContext = () => {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default ProposalContextProvider;
