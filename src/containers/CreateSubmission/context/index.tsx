"use client";
import { createContext, useContext, useState } from "react";

// Typings
type PromptContext = {
  text: string | null;
  setText: (text: string | null) => any;
};

// Context
const PromptContext = createContext<PromptContext>({
  text: null,
  setText: () => {},
});

// Provider
const PromptContextProvider = ({ children }: { children: React.ReactNode }) => {
  // States
  const [text, setText] = useState<string | null>(null);

  // Functions
  const updateText = (newText: string | null) => {
    setText(newText);
  };

  return (
    <PromptContext.Provider value={{ setText: updateText, text }}>
      {children}
    </PromptContext.Provider>
  );
};

// Hooks
export const usePromptContext = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default PromptContextProvider;
