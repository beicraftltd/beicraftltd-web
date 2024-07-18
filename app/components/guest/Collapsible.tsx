import React, { useState } from "react";

interface CollapsibleProps {
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface CollapsibleTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="font-medium text-blue-600 hover:underline"
    >
      {children}
    </button>
  );
};

interface CollapsibleContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  isOpen,
  children,
}) => {
  return isOpen ? <div className="mt-2">{children}</div> : null;
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
